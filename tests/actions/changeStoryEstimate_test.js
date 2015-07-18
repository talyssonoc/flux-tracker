import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import changeStoryEstimate from 'app/actions/changeStoryEstimate';

describe('changeStoryEstimate', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockStoriesStore]
    });

    context.service = new MockService();

    context.service.setService('story', function(method, params, body, config, callback) {
      callback(null, [{
        id: params.id,
        estimate: body.estimate
      }]);
    });
  });

  it('should change story estimate', function(done) {
    context.executeAction(changeStoryEstimate, {
      storyId: 0,
      newEstimate: 1
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('UPDATE_STORY');

      expect(context.dispatchCalls[0].payload).to.eql({
        story: {
          id: 0,
          estimate: 1
        }
      });

      done();
    });
  });
});
