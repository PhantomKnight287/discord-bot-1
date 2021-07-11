<h1 align="center"> Contributing </h1>
First off, thank you for considering contributing to our discord bot!

### Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Questions, Bugs, Features](#questions-bugs-features)
  - [Got a question?](#i-have-a-question-regarding-the-bot)
  - [Found an issue?](#i-found-a-bug-in-the-bot)
  - [Want a new feature?](#i-would-like-a-new-feature)
- [How to contribute](#how-can-i-contribute)
  - [Setting up a development environment locally](#setting-up-the-dev-environment)
  - [Committing the changes](#committing-the-changes)
  - [Pushing the changes](#pushing-the-changes)
- [License](#license)

## Code of Conduct

Please follow the [Code of Conduct][coc] while contributing to this project.
Report any violations to [0xMrNight@gmail.com][email].

## Questions, Bugs, Features

### I have a question regarding the bot

Please do not open an issue to ask a question. Contact us on [discord][discord] or send us an [email][email].

### I found a bug in the bot

If you found a bug in the code, [open an issue](https://github.com/thevynk/discord-bot/issues/new) or submit a pull request.

### I would like a new feature

You can [open an issue](https://github.com/thevynk/discord-bot/issues/new) or contact us on [discord][discord] for feature requests.

## How can I contribute?

> You can refer to [this guide](https://makeapullrequest.com) on creating a PR.

### Setting up the dev environment

- [Fork][fork] the repository
- Clone the forked repo locally - `git clone https://github.com/{user}/discord-bot.git`
- Make a new branch as we don't want to mess with the main (master) branch - `git checkout -b {newBranchName}`
  > The name of the new branch can be anything, just make sure it isn't the same as an existing branch.

### Committing the changes

- After making the changes, add the changed files by running `git add .`
  > Make sure you **do not** commit the install or build dependencies (`node_modules/`), the `.env` file or an _updated `config.json` file_. By default, the `node_modules` and `.env` are ignored by git but please be sure before committing.
- Commit the files using `git commit -m "the commit message here"`.

> Note: The versioning scheme we use is [SemVer](https://semver.org).

### Pushing the changes

- After committing the changes, push the commits to the forked repo - `git push -u origin {branchName}`.
  > Make sure the `origin` is the forked repo. This can be verified by running `git remote`.

## License

This project is licensed under the [MIT license][license].

[coc]: https://github.com/thevynk/discord-bot/blob/master/CODE_OF_CONDUCT.md
[license]: https://github.com/thevynk/discord-bot/blob/master/LICENSE
[email]: mailto:0xmrnight@gmail.com
[discord]: https://discord.gg/ZA4hGY6hXg
[fork]: https://github.com/thevynk/discord-bot/fork
[github-pr]: https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
