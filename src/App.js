import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import Layout from './components/Layout'
import Home from './pages/Home'
import Modo from './pages/Modo'
import NotFound from './pages/NotFound'

import GrupalChallenges from './pages/GrupalChallenges'
import GrupalParticipants from './pages/GrupalParticipants'
import GrupalPlay from './pages/GrupalPlay'

import DuoChallenges from './pages/DuoChallenges'
import DuoParticipants from './pages/DuoParticipants'
import DuoPlay from './pages/DuoPlay'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/modo" component={Modo}/>
          {/* Grupal */}
          <Route exact path="/grupal-retos" component={GrupalChallenges}/>
          <Route exact path="/grupal-participantes" component={GrupalParticipants}/>
          <Route exact path="/grupal-play" component={GrupalPlay}/>
          {/* Duo */}
          <Route exact path="/duo-retos" component={DuoChallenges}/>
          <Route exact path="/duo-participantes" component={DuoParticipants}/>
          <Route exact path="/duo-play" component={DuoPlay}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
