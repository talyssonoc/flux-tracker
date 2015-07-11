import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import StoryActions from './StoryActions';

import StoriesStore from 'app/stores/StoriesStore';

import B from 'app/helpers/bem';

class Story extends React.Component {

  render() {

    var modifiers = {};

    modifiers[this.props.type] = true;

    return (
      <div className={ `${this.props.className} ${this.props.bem(modifiers)}` }>
        <h3 className={ this.props.bem('title') }>
          { this.props.title }
        </h3>
        <StoryActions
          actions={ this.props.actions }
          storyId={ this.props.id }
        />
      </div>
    );
  }
}

Story.defaultProps = {
  bem: B.with('story'),
  className: ''
};

export default Story;
