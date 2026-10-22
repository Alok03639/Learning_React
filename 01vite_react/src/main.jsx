import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Newelement(){
  return(
    <h2>Just exploring</h2>
  )
}

//this will not be execuuted or converted by the react because internally it expect a syntax we genneally do not know about it.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const secondreactElement = (
  <a href = 'https://www.google.com' target = '_blank'> Visit Google </a>
)

const thirdElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(

  thirdElement
)
