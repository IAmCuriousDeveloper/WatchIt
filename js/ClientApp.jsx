import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const renderApp = ()=>{
ReactDOM.render(<App/>,document.getElementById('app'));    
}
renderApp();

if(module.hot){
    module.hot.accept('./App',()=>{
        renderApp()
    })
}

//module variable is coming from the webpack thing