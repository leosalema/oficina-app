/**
 * Nome do Arquivo: App.js
 * Criado 05/06/2019
 * Autor: Leonardo Salema
 * Descrição: O arquivo principal da aplicação responsável por receber via axios
 * os dados que carregados na tabela e na caixa de dialogo que detalha o orçamento,
 * para isso recebemos no state budgets todos os dados que serão enviados para o list 
 * via props. 
 * A função handleClose server para mudar o estado da caixa de dialog.
 * A função searchBudget é responsável por enviar para o budget o id do orçamento selecionado pelo usuário
 * A função handleClick recebe do component list o id selecionado e muda o estado da caixa de dialog
 * 
 */


import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import List from './components/List';
import Budget from './components/Budget';
import './App.css';
import {
  Dialog,
  DialogTitle
} from '@material-ui/core';

const url = 'https://my-json-server.typicode.com/codificar/oficina/proposals';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {budgets: [], open: false};
  }

  componentDidMount () {
    axios.get (url).then (res => {
      const budgets = res.data;
      this.setState ({budgets});
    });
  }

  handleClose = () => {
    this.setState ({...this.state, open: false, id: 0});
  };

  searchBudget (id) {
    const obj = this.state.budgets.filter (budget => budget.id === id);
    return obj.map (budget => <Budget budget={budget} key={budget.id}/>);
  }

  handleClick = id => {
    this.setState ({...this.state, open: true, id});
  };

  render () {
    const {budgets} = this.state;
    return (
      <div className="container">
        <Header />
        <List list={budgets} handleDialog={this.handleClick.bind (this)} />
        <Dialog
          onClose={this.handleClose}
          open={this.state.open}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customize-dialog-title" onClose={this.handleClose}>
            Orçamento
          </DialogTitle>
          {this.searchBudget (this.state.id)}
        </Dialog>
      </div>
    );
  }
}

export default App;
