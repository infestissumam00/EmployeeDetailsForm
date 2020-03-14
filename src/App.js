import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

import { ErrorBoundary, Loader } from 'library/common/components';
import Routes from 'core/Routes';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <ErrorBoundary>
            <Routes />
        </ErrorBoundary>
    );
  }
}

export default connect(null, null)(App);
