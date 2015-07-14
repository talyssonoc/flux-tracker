import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Reject extends React.Component {
  render() {
    return this.createActionButton('Reject', 'reject', 'rejected');
  }
}

export default Reject;
