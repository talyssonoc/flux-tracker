import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Reset extends React.Component {
  render() {
    return this.createActionButton('Reset', 'reset', 'started');
  }
}

ReactMixin(Reset.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Reset, StoryAction.classMixin);

export default Reset;
