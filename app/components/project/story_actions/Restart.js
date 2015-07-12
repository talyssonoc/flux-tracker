import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Restart extends React.Component {
  render() {
    return this.createActionButton('Restart', 'restart', 'started');
  }
}

ReactMixin(Restart.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Restart, StoryAction.classMixin);

export default Restart;
