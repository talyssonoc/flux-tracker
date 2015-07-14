import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Accept extends React.Component {
  render() {
    return this.createActionButton('Accept', 'accept', 'accepted');
  }
}

export default Accept;
