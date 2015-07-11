import React from 'react';

export default function contextTypes() {
  return {
    getStore:      React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  };
};
