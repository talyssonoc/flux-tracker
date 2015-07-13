import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Start extends React.Component {
  render() {
    return this.createActionButton('Start', 'start', 'started');
  }
}

ReactMixin(Start.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Start, StoryAction.classMixin);

export default Start;
