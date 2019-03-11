import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EditPage, IndexPage, ListPage } from './pages';


export const Routes = () =>
    <Switch>
        <Route 
            path="/"
            component={IndexPage}
            exact
            />
        <Route
            path="/list"
            component={ListPage}
            exact
            />
        <Route
            path="/edit"
            component={EditPage}
            exact
            />                        
    </Switch>