import BaseStore from 'fluxible/addons/BaseStore';

class MockStoriesStore extends BaseStore {
  static storeName = 'StoriesStore';

  static handlers = {
    CHANGE_STORY_STATE: 'handleChangeStoryState',
    DELETE_STORY: 'handleDeleteStory',
    UPDATE_STORY: 'handleUpdateStory',
    RECEIVE_STORIES: 'handleReceiveStories'
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
  }

  getStories() {
    return this.stories;
  }
}

export default MockStoriesStore;
