import React, { Component } from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class BillingCycle extends Component {

  render() {

    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content />
      </div>
    );
  }
}

export default BillingCycle