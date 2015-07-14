import React from 'react';

import storyActions from './story_actions';
import changeStoryState from 'app/actions/changeStoryState';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class StoryActions extends React.Component {

  static defaultProps = {
    bem: B.with('story__actions'),
    className: '',
    actions: []
  }

  static contextTypes = contextTypes()

  render() {
    return (
      <div className={ `${this.props.className} ${this.props.bem()}` }>
        {
          this.props.actions.map((action) => {
            var Action = storyActions[action];

            return (
              <Action
                storyId={ this.props.storyId }
                key={ `story-action-${action}` }
              />
            );
          })
        }
      </div>
    );
  }
}

export default StoryActions;
