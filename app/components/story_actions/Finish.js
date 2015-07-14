import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Finish extends React.Component {
  render() {
    return this.createActionButton('Finish', 'finish', 'finished');
  }
}

ReactMixin(Finish.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Finish, StoryActionMixin.classMixin);

export default Finish;
