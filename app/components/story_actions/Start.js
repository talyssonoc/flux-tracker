import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Start extends React.Component {
  render() {
    return this.createActionButton('Start', 'start', 'started');
  }
}

export default Start;
