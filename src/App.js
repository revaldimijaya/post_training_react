import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/favorite">
          <FavoritePage/>
        </Route>
        <Route path="/album/:id">
          <AlbumPage/>
        </Route>
        <Route path="/:artist">
          <ArtistPage/>
        </Route>
        
        <Route path="/">
          <ArtistPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
