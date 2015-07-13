import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Accept extends React.Component {
  render() {
    return this.createActionButton('Accept', 'accept', 'accepted');
  }
}

ReactMixin(Accept.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Accept, StoryAction.classMixin);

export default Accept;
