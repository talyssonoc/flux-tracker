import React from 'react';

import storyActions from './story_actions';

import B from 'app/helpers/bem';

class StoryActions extends React.Component {

  static defaultProps = {
    bem: B.with('story__actions'),
    className: '',
    actions: []
  }

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
                estimateValues={ this.props.estimateValues }
              />
            );
          })
        }
      </div>
    );
  }
}

export default StoryActions;
