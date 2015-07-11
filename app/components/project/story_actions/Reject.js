import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Reject extends React.Component {
  render() {
    return this.createActionButton('Reject', 'reject', 'rejected');
  }
}

ReactMixin(Reject.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Reject, StoryAction.classMixin);

export default Reject;
