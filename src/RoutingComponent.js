import React from 'react'
import {  Route, Switch } from "react-router-dom";
import App from './App';
import MovieDescription from './components/MovieDescription';
import Movies from './components/Movies';
import {useState} from 'react';




const RoutingComponent = () => {
    const  [movies, setMovies] = useState(Movies)
    return (
        <Switch>
            <Route exact  path="/" component={App}></Route>
            <Route exact  path="/description/:Id" render={(props)=><MovieDescription {...props} movies={movies} ></MovieDescription>}></Route>
        </Switch>
    )
}

export default RoutingComponent
