import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';

const Dashboard = () => <h2>Dashboard Component</h2>;
const SurveyNew = () => <h2>SurveyNew Component</h2>;

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;