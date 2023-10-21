import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import your pages and styles
import './bootstrap';
import Contact from './pages/Contact';
import home from './pages/home'; // Import this if you have a HomePage component
import '../css/main.css';
import '../css/custom.css';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
};

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
