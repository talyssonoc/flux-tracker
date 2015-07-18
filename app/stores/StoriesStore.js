import BaseStore from 'fluxible/addons/BaseStore';

import projectConstants from 'app/constants/project';
import storyConstants from 'app/constants/story';

import _ from 'lodash';
import shortid from 'shortid';

class StoriesStore extends BaseStore {

  static storeName = 'StoriesStore'

  static handlers = {
    [storyConstants.RECEIVE_STORIES]: 'handleReceiveStories',
    [projectConstants.ADD_STORY]: 'handleAddStory',
    [projectConstants.DELETE_STORY]: 'handleDeleteStory',
    [projectConstants.UPDATE_STORY]: 'handleUpdateStory',
    [projectConstants.CANCEL_CREATE_STORY]: 'handleCancelCreateStory'
  }

  constructor(dispatcher) {
    super(dispatcher);

    this.columnsForStates = {
      not_estimated: 'icebox',
      icebox: 'icebox',
      unstarted: 'backlog',
      started: 'current',
      finished: 'current',
      delivered: 'current',
      accepted: 'done',
      rejected: 'current'
    };

    this.actionsForStates = {
      not_estimated: ['Estimate'],
      icebox: ['Start'],
      unstarted: ['Start'],
      started: ['Finish'],
      finished: ['Deliver'],
      delivered: ['Accept', 'Reject'],
      accepted: [],
      rejected: ['Restart']
    };

    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  getColumn(story) {
    return this.columnsForStates[story.state];
  }

  getActions(story) {
    return this.actionsForStates[story.state];
  }

  handleReceiveStories(payload) {
    this.stories = payload.stories || [];

    this.stories = this.stories.map((story) => {
      story.column = this.getColumn(story);
      story.actions = this.getActions(story);
      return story;
    });

    this.emitChange();
  }

  handleAddStory(payload) {
    var story = payload.story;

    story.state = 'not_estimated';
    story.estimate = -1;
    story.column = this.getColumn(story);
    story.actions = this.getActions(story);
    story.type = 'feature';
    story._new = true;
    story._tempId = shortid.generate();

    this.stories.push(story);

    this.emitChange();
  }

  handleDeleteStory(payload) {
    _.remove(this.stories, {
      id: payload.storyId
    });

    this.emitChange();
  }

  handleUpdateStory(payload) {
    var story = this.stories.filter(s => s.id === payload.story.id)[0];

    story = story || this.stories.filter(s => s._tempId === payload._tempId)[0];

    if(story._new) {
      delete story._new;
      delete story._tempId;
    }

    _.assign(story, payload.story);
    story.actions = this.getActions(story);
    story.column = this.getColumn(story);

    this.emitChange();
  }

  handleCancelCreateStory(payload) {
    _.remove(this.stories, {
      _tempId: payload._tempId
    });

    this.emitChange();
  }

  dehydrate() {
    return {
      stories: this.stories
    };
  }

  rehydrate(state) {
    this.stories = state.stories;
  }
}

export default StoriesStore;
