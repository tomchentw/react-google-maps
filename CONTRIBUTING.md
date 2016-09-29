# Contributing to React-Google-Maps

## Convention

### `src/lib` contains core library

* Please add new features/fix bugs here
* They'll be compiled by babel into `lib` folder
* Don't manually modify contents under `lib` folder

### `src/app` contains docs app

* It can be served as local app for core library development
* It'll be released as `gh-pages` into `build` folder
* Don't manually modify contents under `build` folder


## Development

[![devDependency Status][david-dm-image]][david-dm-url]


```shell
git clone ...
npm install
npm start
```

Now you can develop!


## Reporting bugs

Please provide a test case of some sort that reproduces the bug. Possible ways ordered by our preference are:
- a pull request with a failing test.
- a link to CodePen/JS Bin
- a repository that illustrates the bug
- a gist that that illustrates the bug.
- some copy/pastable code is acceptable.


## New or Changed API proposals

Please provide thoughtful comments and some sample code. Proposals without substance will not be considered and closed.


## Issue not getting attention

We do our best to work all the issues, but if you report a bug and need it fixed and nobody is fixing it, we highly appreciate if you can fix it. Issues with no activity for long time may be closed.


## How to make a PR

Simple rules when making a pull request:

* Do rebase from master before asking to be reviewed.
* Make sure fixup/squash commits when it's necessary so to have a clean changelog. Check the [the commit format][commit-format].
* **Do NOT** bump `package.json` version.
* **Do NOT** commit any changes inside `lib` folder. (i.e. you shouldn't run `npm run build` yourself). We will take care of it before publishing.

### Commit format

> One golden rule: follow [the commit format][commit-format]

We use [standard-version][standard-version] to automatically generate [CHANGELOG.md][CHANGELOG.md] from the `git commit` history. Please **do** follow [the commit format][commit-format] before commiting.


## For collaborators with write permissions

If you are a collaborator with write permission for this repository, you're free to do changes. But in order to keep changes trackable, please follow the guideline here:

> Create a PR with your branch

> In local, merge your branch to `master`. **Make sure** it's a `fast-forward` merge. If not, make sure you rebase first.

> Push your master to `origin` and you should see the PR is automatically closed.

**Examples**: #269, #270, #271


### PR (for collaborators)

* Don't use merge commit (already disabled)
* **Always** use squash merge. Reformat the commit message to match this guideline.
* Include `thanks to @commitAuthor` message
* Include `closes #pr-number, #issue-number` message if applicable

**Examples**: #252, #259


## Release

Right now, only the owner (author) has the write permission on npm. But the procedure is the following:

* Run `npm run release`
* Now the changes are automatically committed
* It automatically bumps `package.json` according to the `git commit` history
* [CHANGELOG.md][CHANGELOG.md] is generated for the version as well
* Run `git tag` for the version is tagged to the commit too
* The last step is release the changes to `origin` and `npm`.



[david-dm-image]: https://img.shields.io/david/dev/tomchentw/react-google-maps.svg?style=flat-square
[david-dm-url]: https://david-dm.org/tomchentw/react-google-maps#info=devDependencies
[standard-version]: https://github.com/conventional-changelog/standard-version
[CHANGELOG.md]: ./CHANGELOG.md
[commit-format]: https://github.com/conventional-changelog/standard-version#commit-message-convention-at-a-glance
