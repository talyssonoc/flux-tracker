import StoriesStore from 'app/stores/StoriesStore';

import getStories from 'tests/fixtures/getStories';

describe('StoriesStore', function() {

  var store;
  var stories;

  beforeEach(function() {
    store = new StoriesStore();
    stories = getStories();
  });

  afterEach(function() {
    store = undefined;
    stories = undefined;
  });

  it('should return the right column', function() {
    var columnBacklog = store.getColumn(stories[0]);
    var columnCurrent = store.getColumn(stories[1]);
    var columnIcebox = store.getColumn(stories[2]);

    expect(columnBacklog).to.be.eql('backlog');
    expect(columnCurrent).to.be.eql('current');
    expect(columnIcebox).to.be.eql('icebox');
  });

  it('should return the right actions', function() {
    var startAction = store.getActions(stories[0]);
    var deliverAction = store.getActions(stories[1]);
    var startAction2 = store.getActions(stories[2]);

    expect(startAction).to.be.eql(['Start']);
    expect(deliverAction).to.be.eql(['Deliver']);
    expect(startAction2).to.be.eql(['Start']);
  });

  it('should correctly receive the stories', function() {
    store.handleReceiveStories({
      stories: stories
    });

    expect(store.stories.length).to.be.equal(3);

    store.stories.forEach(function(story) {
      expect(story).to.include.keys('column', 'actions');
    });
  });

  it('should correctly change a story state', function() {
    var storyWithNewState = {
      id: stories[2].id,
      state: 'started'
    };

    store.handleReceiveStories({
      stories: stories
    });

    store.handleStoryStateChange({
      story: storyWithNewState
    });

    expect(store.stories[2].state).to.be.eql('started');
    expect(store.stories[2].column).to.be.eql('current');
    expect(store.stories[2].actions).to.be.eql(['Finish']);
  });

  it('should correctly delete a story', function() {
    store.handleReceiveStories({
      stories: stories
    });

    store.handleDeleteStory({
      storyId: stories[0].id
    });

    expect(store.stories.length).to.be.equal(2);
    expect(store.stories[0].id).to.be.equal(1);
    expect(store.stories[1].id).to.be.equal(2);
  });
});
