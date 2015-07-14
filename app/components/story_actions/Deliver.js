import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Deliver extends React.Component {
  render() {
    return this.createActionButton('Deliver', 'deliver', 'delivered');
  }
}

export default Deliver;
