import React from 'react';

import StoryActions from './StoryActions';
import StoriesStore from 'app/stores/StoriesStore';

import B from 'app/helpers/bem';

class ClosedStoryContent extends React.Component {

  render() {

    return (
      <div
        className={ this.props.bem('content') }
        onClick={ this.props.toggleHandler }
      >
        <h3 className={ this.props.bem('title') }>
          { this.props.story.title }
        </h3>
        <StoryActions
          actions={ this.props.story.actions }
          storyId={ this.props.story.id }
        />
      </div>
    );
  }
}

ClosedStoryContent.defaultProps = {
  bem: B.with('story'),
  className: ''
};

export default ClosedStoryContent;
