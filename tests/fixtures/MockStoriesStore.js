import BaseStore from 'fluxible/addons/BaseStore';

class MockStoriesStore extends BaseStore {
  static storeName = 'StoriesStore';

  static handlers = {
    CHANGE_STORY_STATE: 'handleChangeStoryState',
    DELETE_STORY: 'handleDeleteStory',
    UPDATE_STORY: 'handleUpdateStory'
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
}

export default MockStoriesStore;
