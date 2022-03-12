import React from "react";
import ReactDOM from "react-dom";


import App from './App';

// passing App component inside ReactDOM
// then we've to trigger document.getdocumentByID and then pass string of root
// This is going to trigger our div with ID of root and it is going to inject our entire Application right inside of it.
ReactDOM.render(<App />, document.getElementById('root'));