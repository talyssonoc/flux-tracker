import changeStoryState from 'app/actions/changeStoryState';
import contextTypes from 'app/helpers/contextTypes';

import React from 'react';

import B from 'app/helpers/bem';

var StoryAction = {
  instanceMixin: {
    changeStateTo: function changeStateTo(newState) {
      this.context.executeAction(changeStoryState, {
        storyId: this.props.storyId,
        newState: newState
      });
    },

    createActionButton: function createActionButton(text, type, toState) {
      return (
        <button
          onClick={ () => this.changeStateTo(toState) }
          className={ this.props.bem({ [type]: true }) }>
          { text }
        </button>
      );
    }
  },

  classMixin: {
    contextTypes: contextTypes(),

    getDefaultProps: function getDefaultProps() {
      return {
        bem: B.with('story__actions__button'),
        className: ''
      };
    }
  }
};

export default StoryAction;
