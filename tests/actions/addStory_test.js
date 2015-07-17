import { createMockActionContext } from 'fluxible/utils';

import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import addStory from 'app/actions/addStory';

describe('addStory', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockStoriesStore]
    });
  });

  it('should add temporary a story to the store', function(done) {
    context.executeAction(addStory, {
      title: 'My story',
      project_id: 0
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('ADD_STORY');

      expect(context.dispatchCalls[0].payload.story).to.eql({
        title: 'My story',
        project_id: 0
      });

      var addedStory = context.getStore(MockStoriesStore).getAddedStory();

      expect(addedStory).to.be.eql({
        title: 'My story',
        project_id: 0
      });

      done();
    });
  });
});
