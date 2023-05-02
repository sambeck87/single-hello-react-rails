import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/index';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>{greeting ? greeting.message : 'Loading...'}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
