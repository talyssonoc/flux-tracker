export default function() {
  return [
    {
      id: 0,
      state: 'not_estimated',
      type: 'chore',
      title: 'chore 0',
      project_id: 2,
      estimate: -1
    },
    {
      id: 1,
      state: 'finished',
      type: 'bug',
      title: 'bug 1',
      project_id: 0,
      estimate: 3
    },
    {
      id: 2,
      state: 'icebox',
      type: 'feature',
      title: 'feature 2',
      project_id: 0,
      estimate: 1
    }
  ];
};
