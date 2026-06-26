import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
    </div>
  );
}

const anotherElement=(
  <a href="https://google.com" target="_blank">
    Click here to visit Google
  </a>
)

const anotheruser="Deepender"
const reactElement =React .createElement('p',
  {href:'https.//google.com',target:'_blank'},
  'Click me to visit Google',anotherElement,anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

  
)
