import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Accept extends React.Component {
  render() {
    return this.createActionButton('Accept', 'accept', 'accepted');
  }
}

ReactMixin(Accept.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Accept, StoryActionMixin.classMixin);

export default Accept;
