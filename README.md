# FluxTracker

[![Build Status](https://travis-ci.org/talyssonoc/flux-tracker.svg?branch=master)](https://travis-ci.org/talyssonoc/flux-tracker) [![Code Climate](https://codeclimate.com/github/talyssonoc/flux-tracker/badges/gpa.svg)](https://codeclimate.com/github/talyssonoc/flux-tracker)

FluxTracker is a user story tracker, highly influenced by [Pivotal Tracker](https://www.pivotaltracker.com/) and [Fulcrum](https://github.com/fulcrum-agile/fulcrum) built as a isopmorphic app with [React](http://facebook.github.io/react/) and [Fluxible](http://fluxible.io/).

It's in development yet, don't use it. Contributions and suggestions are welcome !

## Setup

Checkout the project then  run:

```sh
  $ npm install
```

Configure the `configs/database.js` file (you can rename the `configs/database.js.example` and fill it with the date of your local database). The content of this file will be passed to the `initialize` method of a [Waterline](https://github.com/balderdashy/waterline-docs/blob/master/introduction/getting-started.md) instance.

Now you should seed your project, running:

```sh
  $ npm run seed
```

And then you can run the project with:

```sh
  $ npm run dev
```

## Testing

You should have [karma-cli](https://www.npmjs.com/package/karma-cli) installed globally to run the tests.

You can run the project tests with:

```sh
  $ npm test
```

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Icons use attributions

Bug, Feature: http://www.fatcow.com/free-icons

Chore: http://www.virtuallnk.com/

Release: http://p.yusukekamiyamane.com/
