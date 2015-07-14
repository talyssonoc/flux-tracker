import React from 'react';
import ReactMixin from 'react-mixin';

import TextArea from 'react-textarea-autosize';

import deleteStory from 'app/actions/deleteStory';
import updateStory from 'app/actions/updateStory';
import keyCodes from 'app/constants/keyCodes';
import storyConstants from 'app/constants/story';

import _ from 'lodash';
import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class OpenStoryContent extends React.Component {

  constructor(props) {
    super();

    this.state = _.omit(props.story, ['actions', 'column']);
  }

  saveStory() {
    this.context.executeAction(updateStory, {
      story: this.state
    });

    this.props.toggleHandler();
  }

  deleteStory() {
    if(confirm('Do you really want to delete it?')) {
      this.context.executeAction(deleteStory, {
        storyId: this.props.story.id
      });
    }
  }

  keyDownHandler(event) {
    if(event.keyCode === keyCodes.ENTER) {
      this.saveStory();
      event.stopPropagation();
    }
  }

  componentDidMount() {
    React.findDOMNode(this.refs.title).focus();
  }

  render() {

    var types = storyConstants.TYPES
      .map((type) => {
      return (
        <option
          value={ type }
          key={ `type-${type}` }
        >
          { type }
        </option>
      );
    });

    var states = storyConstants.STATES
    .filter((type) => type !== 'icebox')
    .map((state) => {
      return (
        <option
          value={ state }
          key={ `state-${state}` }
        >
          { state }
        </option>
      );
    });

    return (

      <div className={ this.props.bem('content') }>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__col">
              <TextArea
                minRows={ 1 }
                maxRows={ 5 }
                className={ this.props.bem('textarea') }
                valueLink={ this.linkState('title') }
                onKeyDownCapture={ (e) => this.keyDownHandler(e) }
                ref="title"
              />
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <label
                className={ this.props.bem('label') }
              >
                Type
              </label>
            </div>
            <div className="grid__col grid__col-10">
              <select
                className={ this.props.bem('select') }
                valueLink={ this.linkState('type') }
              >
                { types }
              </select>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-2">
              <label
                className={ this.props.bem('label') }
              >
                State
              </label>
            </div>
            <div className="grid__col grid__col-10">
              <select
                className={ this.props.bem('select') }
                valueLink={ this.linkState('state') }
              >
                { states }
              </select>
            </div>
          </div>

          <div className="grid__row">
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.saveStory() }
                className="button button--black"
              >
                Save
              </button>
            </div>
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.deleteStory() }
                className="button button--black"
              >
                Delete
              </button>
            </div>
            <div className="grid__col grid__col-3">
              <button
                onClick={ () => this.props.toggleHandler() }
                className="button button--black"
              >
                Cancel
              </button>
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
