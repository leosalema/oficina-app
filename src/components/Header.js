/**
 * Nome do Arquivo: Header.js
 * Criado 05/06/2019
 * Autor: Leonardo Salema
 * Descrição: Criado para gerar o cabeçalho da aplicação
 * 
 */

import React from 'react';
import { Typography } from '@material-ui/core';

export default props => (
    <div className='header'>
          <Typography className='title' variant='h4' align='center'>Oficina Mecânica</Typography>
          <Typography className='sub-title' variant='h6'>Sistema de Orçametos</Typography>
    </div>
)