import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repository from '../pages/repository';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
