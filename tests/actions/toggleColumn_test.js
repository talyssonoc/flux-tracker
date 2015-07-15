import { createMockActionContext } from 'fluxible/utils';

import MockProjectsStore from 'tests/fixtures/MockProjectsStore';
import toggleColumn from 'app/actions/toggleColumn';

describe('toggleColumn', function() {
  var context;

  beforeEach(function() {
    context = createMockActionContext({
      stores: [MockProjectsStore]
    });
  });

  it('should toggle a column', function(done) {
    context.executeAction(toggleColumn, {
      column: 'current'
    }, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('TOGGLE_COLUMN');

      expect(context.dispatchCalls[0].payload).to.eql({
        column: 'current'
      });

      var toggledColumn = context.getStore(MockProjectsStore).getToggledColumn();
      expect(toggledColumn).to.be.equal('current');

      done();
    });
  });
});
