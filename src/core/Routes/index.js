import { connect } from 'react-redux';
import React, { lazy } from 'react';
import { Redirect, Route, withRouter, Switch} from 'react-router-dom';

import HomePage from 'modules/HomePage'

const Routes = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
              return <Redirect to="/home" />;
          }}
        />
        <Route exact path="/home" component={HomePage} />

      </Switch>
    </div>
  );
};



export default withRouter(connect()(Routes));
