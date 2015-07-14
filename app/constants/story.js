import mirror from 'react/lib/keyMirror';
import _ from 'lodash';

export default _.extend(mirror({
  RECEIVE_STORIES: null,
  CHANGE_STORY_STATE: null
}), {
  TYPES: [
    'feature',
    'chore',
    'bug',
    'release'
  ],
  STATES: [
    'icebox',
    'unstarted',
    'started',
    'finished',
    'delivered',
    'accepted',
    'rejected'
  ],
  STATE_COLUMNS: {
    icebox: 'icebox',
    unstarted: 'backlog',
    started: 'current',
    finished: 'current',
    delivered: 'current',
    accepted: 'done',
    rejected: 'current'
  },
  STATE_ACTIONS: {
    icebox: ['Start'],
    unstarted: ['Start'],
    started: ['Finish'],
    finished: ['Deliver'],
    delivered: ['Accept', 'Reject'],
    accepted: [],
    rejected: ['Restart']
  }
});
