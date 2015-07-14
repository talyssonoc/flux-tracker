import React from 'react';

import ReactMixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

class Deliver extends React.Component {
  render() {
    return this.createActionButton('Deliver', 'deliver', 'delivered');
  }
}

ReactMixin(Deliver.prototype, StoryActionMixin.instanceMixin);
ReactMixin.onClass(Deliver, StoryActionMixin.classMixin);

export default Deliver;
