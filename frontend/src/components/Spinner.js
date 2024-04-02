import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const spinnerStyle = {
  position: 'absolute',
  top: 'calc(50% - 1rem)',
  left: 'calc(50% - 1rem)',
};

const Loader = () => {
  return <Spinner style={spinnerStyle} animation="border" variant="primary" />;
};

export default Loader;
