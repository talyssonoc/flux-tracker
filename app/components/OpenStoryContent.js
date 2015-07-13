import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import ReactMixin from 'react-mixin';

import deleteStory from 'app/actions/deleteStory';
import StoryActions from './StoryActions';
import StoriesStore from 'app/stores/StoriesStore';

import _ from 'lodash';
import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class OpenStoryContent extends React.Component {

  constructor(props) {
    super();

    this.state = _.omit(props.story, ['actions', 'column']);
  }

  saveStory() {
    this.props.toggleHandler();
  }

  deleteStory() {
    if(confirm('Do you really want to delete it?')) {
      this.context.executeAction(deleteStory, {
        storyId: this.props.story.id
      });
    }
  }

  render() {

    return (

      <div className={ this.props.bem('content') }>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <button
                onClick={ () => this.saveStory() }
                className="button button--black"
              >
                Save
              </button>
            </div>
            <div className="grid__col grid__col-2">
              <button
                onClick={ () => this.deleteStory() }
                className="button button--black"
              >
                Delete
              </button>
            </div>
            <div className="grid__col grid__col-2">
              <button
                onClick={ () => this.props.toggleHandler() }
                className="button button--black"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col">
              <input
                type="text"
                valueLink={ this.linkState('title') }
              />
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col">
              <input
                type="text"
                valueLink={ this.linkState('type') }
              />
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col">
              <input
                type="text"
                valueLink={ this.linkState('state') }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OpenStoryContent.defaultProps = {
  bem: B.with('story'),
  className: ''
};

OpenStoryContent.contextTypes = contextTypes();

ReactMixin(OpenStoryContent.prototype, React.addons.LinkedStateMixin);

export default OpenStoryContent;
