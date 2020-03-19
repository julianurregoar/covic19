import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://covid19.mathdro.id/api'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hello
        </a>
        {/* https://github.com/netlify-labs/deploy-create-react-app/blob/master/netlify.toml */}
      </header>
    </div>
  );
}

export default App;
