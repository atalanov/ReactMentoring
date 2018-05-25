import React from 'react';
import { Logger as logger } from './utils';
import Component from './component';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        stack: info.componentStack,
        message: error.toString(),
       });
      logger.log(error, info);
    }
    render() {
      if (this.state.hasError) {
        return <Component componentStack={this.state.stack} message={this.state.message} />;
      }
      return this.props.children;
    }
}

export default ErrorBoundary;
