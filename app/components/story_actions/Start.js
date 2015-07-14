import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Start extends React.Component {
  render() {
    return this.createActionButton('Start', 'start', 'started');
  }
}

ReactMixin(Start.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Start, StoryActionMixin.classMixin);

export default Start;
