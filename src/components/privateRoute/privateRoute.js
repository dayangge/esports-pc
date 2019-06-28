import React, {Component} from 'react';
import LoginStateExpired from '../../components/authErrorPage/loginStateExpired'

class PrivateRoute extends Component {
  isAuthenticated = false;

  constructor(props) {
    super(props);
    if (sessionStorage.getItem('token') !== '') {
      this.isAuthenticated = true
    }
  }

  componentDidMount() {
    if (!this.isAuthenticated) {
      const {history} = this.props;
      history.replace("/login");
    }
  }

  componentDidUpdate() {
    if (sessionStorage.getItem('token') !== '') {
      this.isAuthenticated = true
    }
    if (sessionStorage.getItem('token') === '') {
      this.isAuthenticated = false
    }

    if (!this.isAuthenticated) {
      const {history} = this.props;
      setTimeout(() => {
        history.replace("/login");
      }, 1000)
    }
  }

  render() {
    let {children} = this.props;
    return (this.isAuthenticated === true) ? (
      children
      ) : (<LoginStateExpired/>)
  }
}

export default PrivateRoute;
