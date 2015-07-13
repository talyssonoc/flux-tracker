import React from 'react';

import ReactMixin from 'react-mixin';

import StoryAction from 'app/mixins/StoryAction';

class Deliver extends React.Component {
  render() {
    return this.createActionButton('Deliver', 'deliver', 'delivered');
  }
}

ReactMixin(Deliver.prototype, StoryAction.instanceMixin);
ReactMixin.onClass(Deliver, StoryAction.classMixin);

export default Deliver;
