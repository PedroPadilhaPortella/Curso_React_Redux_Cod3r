import React, { Component } from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabHeader from '../common/tab/TabHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import BillingCycleList from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/TabActions'
import { create } from './billingCycleActions';

class BillingCycle extends Component {

  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
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
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <h1>Update</h1>
              </TabContent>
              <TabContent id='tabDelete'>
                <h1>Delete</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
  selectTab, showTabs, create 
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)