import React from 'react';

import B from 'app/helpers/bem';

class Story extends React.Component {

  render() {
    return (
      <div className={ this.props.bem() }>
        { this.props.title }
      </div>
    );
  }
}

Story.defaultProps = {
  bem: B.with('story')
};

export default Story;
