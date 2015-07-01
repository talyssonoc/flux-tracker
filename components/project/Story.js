import React from 'react';

class Story extends React.Component {

  render() {
    return (
      <div>
        { this.props.title }
      </div>
    );
  }
}

export default Story;
