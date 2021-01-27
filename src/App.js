import Chatbot from 'react-chatbot-kit'
import React from 'react'
import './App.css';

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from './config'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video controls width="240" height="180" >
          <source src="" />
        </video>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;