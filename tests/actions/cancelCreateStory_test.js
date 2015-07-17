import { createMockActionContext } from 'fluxible/utils';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import cancelCreateStory from 'app/actions/cancelCreateStory';

describe('cancelCreateStory', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockStoriesStore]
    });
  });

  it('should cancel temporary story', function(done) {
    context.executeAction(cancelCreateStory, {
      _tempId: 123
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('CANCEL_CREATE_STORY');

      expect(context.dispatchCalls[0].payload).to.eql({
        _tempId: 123
      });

      var cancelledStory = context.getStore(MockStoriesStore).getCancelledStory();

      expect(cancelledStory).to.be.equal(123);

      done();
    });
  });
});
