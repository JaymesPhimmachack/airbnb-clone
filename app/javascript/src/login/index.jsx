import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));
  ReactDOM.render(
    <Login type={data.type} />,
    document.body.appendChild(document.createElement('div')),
  )
})
