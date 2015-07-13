import React from 'react';

import storyActions from './story_actions';

import changeStoryState from 'app/actions/changeStoryState';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class StoryActions extends React.Component {

  render() {

    var actions = this.props.actions.map((action) => {
      var Action = storyActions[action];
      return (
        <Action
          storyId={ this.props.storyId }
          key={ `story-action-${action}` }
        />);
    });

    return (
      <div className={ `${this.props.className} ${this.props.bem()}` }>
        { actions }
      </div>
    );
  }
}

StoryActions.defaultProps = {
  bem: B.with('story__actions'),
  className: '',
  actions: []
};

StoryActions.contextTypes = contextTypes();

export default StoryActions;
