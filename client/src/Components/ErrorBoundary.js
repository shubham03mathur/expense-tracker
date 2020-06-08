import React from 'react';
import NotFound from './NotFound/NotFound';

class ErrorBoundary extends React.Component {
    state = {
        hasError: null
    }

    componentDidCatch(error, trace) {
        this.setState({
            hasError: error
        });
    }

    render() {
        if (!!this.state.error) {
            return null;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
