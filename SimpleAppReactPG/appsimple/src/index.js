import React from 'react';
import { createRoot } from 'react-dom/client';
//import VideojuegosApp from './VideojuegosApp';
import ListaVideojuegosApp from './ListaVideojuegosApp';
import './index.css';



const container = document.getElementById('root');
const root = createRoot(container);
//Utilizamos el JSX que devuelve el componente VideojuegosApp para injectar ese html
// en divRoot
root.render(<ListaVideojuegosApp/>);
//root.render(<VideojuegosApp/>);