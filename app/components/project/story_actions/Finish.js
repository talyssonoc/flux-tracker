import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Finish extends React.Component {
  render() {
    return this.createActionButton('Finish', 'finish', 'finished');
  }
}

ReactMixin(Finish.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Finish, StoryAction.classMixin);

export default Finish;
