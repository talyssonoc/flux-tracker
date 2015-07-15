import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import getStories from 'tests/fixtures/getStories';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import changeStoryState from 'app/actions/changeStoryState';

describe('changeStoryState', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockStoriesStore]
    });

    context.service = new MockService();

    context.service.setService('story', function(method, params, body, config, callback) {
      callback(null, {
        id: params.id,
        state: body.state
      });
    });
  });

  it('should change story state', function(done) {
    context.executeAction(changeStoryState, {
      storyId: 0,
      newState: 'finished'
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('CHANGE_STORY_STATE');

      expect(context.dispatchCalls[0].payload).to.eql({
        story: {
          id: 0,
          state: 'finished'
        }
      });

      done();
    });
  });
});
