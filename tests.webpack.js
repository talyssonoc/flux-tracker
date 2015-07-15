var context = require.context('./tests', true, /_test\.js$/);

context.keys().forEach(context);
