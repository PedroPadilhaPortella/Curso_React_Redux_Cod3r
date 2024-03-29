import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TabContent from '../common/tab/TabContent'
import TabHeader from '../common/tab/TabHeader'
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'
import TabsHeader from '../common/tab/TabsHeader'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import { create, init, remove, update } from './BillingCycleActions'
import BillingCycleForm from './BillingCycleForm'
import BillingCycleList from './BillingCycleList'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash' target='tabDelete' />
              <TabHeader label='Gerenciar' icon='eye' target='tabManage' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.create} 
                  submitLabel='Incluir' submitClass='primary'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm onSubmit={this.props.update} 
                  submitLabel='Alterar' submitClass='info'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingCycleForm onSubmit={this.props.remove} 
                  readOnly={true} submitLabel='Excluir' submitClass='danger' 
                />
              </TabContent>
              <TabContent id='tabManage'>
                <BillingCycleForm readOnly={true} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  init, create, update, remove
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)