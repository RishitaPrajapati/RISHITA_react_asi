import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import App from './NewApps'
// import Header from './header'
import NewApps from "./NewApps"



let html = document.getElementById('root')

let root = ReactDOM.createRoot(html)

root.render(<App />)

// root.render(<NewApps />)
