import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import App from './pages/Home/App';
import Nav from './components/Navigation/Nav';
import About from './pages/About/About';
import Error from './pages/404/404';
import Footer from './components/Footer/Footer';

ReactDOM.render(
    <React.StrictMode>
        <div className="main__container">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
