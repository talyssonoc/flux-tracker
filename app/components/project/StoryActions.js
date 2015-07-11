import React from 'react';

import storyActions from './story_actions';

import changeStoryState from 'app/actions/changeStoryState';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class StoryActions extends React.Component {
  storyStateChangeHandler() {
    var newState = React.findDOMNode(this.refs.stateSelect).value;

    this.context.executeAction(changeStoryState, {
      storyId: this.props.storyId,
      newState: newState
    });
  }

  render() {

    var actions = this.props.actions.map((action) => {
      var Action = storyActions[action];
      return <Action storyId={ this.props.storyId }/>;
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
