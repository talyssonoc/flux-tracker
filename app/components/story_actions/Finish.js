import React from 'react';

import mixin from 'react-mixin';

import StoryActionMixin from 'app/mixins/StoryActionMixin';

@mixin.decorate(StoryActionMixin)
class Finish extends React.Component {
  render() {
    return this.createActionButton('Finish', 'finish', 'finished');
  }
}

export default Finish;
