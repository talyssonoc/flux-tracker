import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import getStories from 'tests/fixtures/getStories';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import updateStory from 'app/actions/updateStory';

describe('updateStory', function() {
  var context;
  var story;

  beforeEach(function() {
    story = getStories()[0];

    context = createMockActionContext({
      stores: [MockStoriesStore]
    });

    context.service = new MockService();

    context.service.setService('story', function(method, params, body, config, callback) {
      callback(null, [body]);
    });
  });

  it('should update a story', function(done) {
    context.executeAction(updateStory, {
      story: story
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('UPDATE_STORY');

      expect(context.dispatchCalls[0].payload.story).to.eql(story);

      done();
    });
  });
});
