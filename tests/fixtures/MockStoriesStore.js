import BaseStore from 'fluxible/addons/BaseStore';

class MockStoriesStore extends BaseStore {
  static storeName = 'StoriesStore';

  static handlers = {
    CHANGE_STORY_STATE: 'handleChangeStoryState',
    DELETE_STORY: 'handleDeleteStory',
    UPDATE_STORY: 'handleUpdateStory',
    RECEIVE_STORIES: 'handleReceiveStories',
    ADD_STORY: 'handleAddStory',
    CANCEL_CREATE_STORY: 'handleCancelCreateStory'
  }

  constructor(dispatcher) {
    super(dispatcher);
  }

  handleChangeStoryState(payload) {
    this.story = payload.story;

    this.emitChange();
  }

  handleDeleteStory(payload) {
    this.storyDeleted = payload.storyId;

    this.emitChange();
  }

  handleUpdateStory(payload) {
    this.emitChange();
  }

  handleReceiveStories(payload) {
    this.stories = payload.stories;

    this.emitChange();
  }

  handleAddStory(payload) {
    this.addedStory = payload.story;

    this.emitChange();
  }

  handleCancelCreateStory(payload) {
    this.cancelledStory = payload._tempId;
    this.emitChange();
  }

  getStories() {
    return this.stories;
  }

  getAddedStory() {
    return this.addedStory;
  }

  getCancelledStory() {
    return this.cancelledStory;
  }
}

export default MockStoriesStore;
