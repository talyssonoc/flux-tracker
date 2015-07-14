import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Reject extends React.Component {
  render() {
    return this.createActionButton('Reject', 'reject', 'rejected');
  }
}

ReactMixin(Reject.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Reject, StoryActionMixin.classMixin);

export default Reject;
