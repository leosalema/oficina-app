/**
 * Nome do Arquivo: Budget.js
 * Criado 05/06/2019
 * Autor: Leonardo Salema
 * Descrição: Criado montar a caixa de dialog que irá apresentar para o usuário
 * os dados do orçamento selecionado
 */

import React from 'react';
import {DialogContent, TextField} from '@material-ui/core';

export default props => (
    <DialogContent dividers key={props.budget.id}>
      <TextField
        margin='dense'
        id='customer'
        label='Cliente: '
        type='text'
        value={props.budget.customer}
        fullWidth
      />
      <TextField
        margin='dense'
        id='customer'
        label='Vendedor: '
        type='text'
        value={props.budget.seller}
        fullWidth
      />
      <TextField
        margin='dense'
        id='customer'
        label='Descrição: '
        type='text'
        value={props.budget.description}
        fullWidth
      />
      <TextField
        margin='dense'
        id='customer'
        label='Valor: '
        type='text'
        value={props.budget.value}
        fullWidth
      />
      </DialogContent>
)