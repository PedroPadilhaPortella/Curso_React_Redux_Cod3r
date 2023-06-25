import { Component } from 'react';
import './Contador.css'
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  }

  // constructor(props) {
  //   super(props)
  //   this.incrementar = this.incrementar.bind(this)
  // }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className='Contador'>
        <h1>Contador</h1>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setStep={this.setPasso} />
        <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
      </div>
    );
  }
}