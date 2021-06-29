import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/registro" component={Registro} />
              <Route component={NotFound}/> 
            </Switch>
          </Layout>
        </BrowserRouter>
    );
}

export default App;