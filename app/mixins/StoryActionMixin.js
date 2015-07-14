import changeStoryState from 'app/actions/changeStoryState';
import contextTypes from 'app/helpers/contextTypes';

import React from 'react';

import B from 'app/helpers/bem';

var StoryActionMixin = {
  contextTypes: contextTypes(),

  changeStateTo(event, newState) {
    event.stopPropagation();

    this.context.executeAction(changeStoryState, {
      storyId: this.props.storyId,
      newState: newState
    });
  },

  createActionButton(text, type, toState) {
    return (
      <button
        onClick={ (e) => this.changeStateTo(e, toState) }
        className={ this.props.bem({ [type]: true }) }>
        { text }
      </button>
    );
  },

  getDefaultProps() {
    return {
      bem: B.with('story__actions__button'),
      className: ''
    };
  }
};

export default StoryActionMixin;
