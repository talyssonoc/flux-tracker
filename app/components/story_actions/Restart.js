import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Restart extends React.Component {
  render() {
    return this.createActionButton('Restart', 'restart', 'started');
  }
}

ReactMixin(Restart.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Restart, StoryActionMixin.classMixin);

export default Restart;
