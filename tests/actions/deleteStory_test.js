import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import deleteStory from 'app/actions/deleteStory';

describe('deleteStory', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockStoriesStore]
    });

    context.service = new MockService();

    context.service.setService('story', function(method, params, config, callback) {
      callback(null, {
        id: params.id
      });
    });
  });

  it('should delete a story', function(done) {
    context.executeAction(deleteStory, {
      storyId: 3
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('DELETE_STORY');

      expect(context.dispatchCalls[0].payload).to.eql({
        storyId: 3
      });

      done();
    });
  });
});
