/**
 * Nome do Arquivo: Item.js
 * Criado 05/06/2019
 * Autor: Leonardo Salema
 * Descrição: Criado para receber via props.data os dados pertencentes aos registros.
 * Possui o evento onClick envia para handleOnPress o id do registro clicado
 * 
 */

import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

export default props => 
    <TableRow key={props.data.id} onClick={() => props.handleOnPress(props.data.id)}>
        <TableCell component='th' scope='row'>{props.data.customer}</TableCell>
        <TableCell>{props.data.seller}</TableCell>
        <TableCell>{props.data.value}</TableCell>
    </TableRow>