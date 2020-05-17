import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/lanao.css';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import DataSetPage from './pages/DataSetPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/support" component={Support} />
          <Route path="/data/Dataset" component={DataSetPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter> 
  );
}

export default App;
