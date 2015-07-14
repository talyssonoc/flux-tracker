import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Restart extends React.Component {
  render() {
    return this.createActionButton('Restart', 'restart', 'started');
  }
}

export default Restart;
