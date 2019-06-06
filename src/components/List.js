/**
 * Nome do Arquivo: List.js
 * Criado 05/06/2019
 * Autor: Leonardo Salema
 * Descrição: Criado para receber via props.list os que irão gerar a tabela de orçamentos.
 * A props handleOnPress recebe o id do registro clicado e envia para handleDialog
 * 
 */


import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  AppBar,
} from '@material-ui/core';
import Item from './Item';

class List extends Component{
    render() {
        return (
          <Paper>
            <AppBar position='static' color='default' className='title-container'>
              <Typography className='sub-title' variant='h4'>Lista de Orçamentos</Typography>
            </AppBar>
            <Table>
              <TableHead className='header'>
                <TableRow>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Vendedor</TableCell>
                  <TableCell>Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.list.map (item => (
                  <Item
                    key={item.id}
                    data={item}
                    handleOnPress={id => this.props.handleDialog(id)}
                  />
                ))}
              </TableBody>
            </Table>
            <Typography variant='subtitle1' className='sub-title'> ** Clique no orçamento desejado para visualizá-lo</Typography>
          </Paper>
        );
    }
}

export default List;