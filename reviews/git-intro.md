# Review 10/19/21: Command Line and Git

## Terminal Commands

`cd <filepath>` - change directory, `..` refers to parent directory, `.` refers to current directory, `-` history go back feature (linux/unix/gitbash)

`touch <file>` - creates a file(s), linux/unix

`echo "message" > <filepath>` - writes message to a file, creates a file if not exists

`mkdir <dir>` - creates new directories

`ls [<filepath>]`/ `dir <filepath>` - list items in specified directory

`pwd` - print working directory

`cat <file(s)> > <combinedfile>` - catenates all input from file(s) and outputs to a combined file

`head <file>` - output the first 10 lines from a file

`tail <file>` - output the last 10 lines from a file

## Git

> Git is a _distributed version control system_, "virtual workspace", staging platform for directories/repositories
> A _version control system_ manages states, current and previous, of files allowing the author(s) to revert the state of any file, or the entire project itself to a previous working/different state.
> A _distributed_ version control system distributes clones/copies of the entire project AND the entire git history to any collaborator to have locally.

## Git Commands

`git init` - initializes directory/project as git repo; git starts looking a project

`git config` - used to updated configuration options with local git cli, use `--global` to set global config variables

## Git Workflow

`git add .` - adds a file(s) to the staging area

`git commit -m "message"` - appends a message with a commit, or _snapshot_ of the current state of the project/file

`git push [-u origin main]` - pushs your local changes to be merged with the remote repo

`git pull` - pulls the remote changes to be merged with your local repo

`git diff` - displays a patch set of changes from previous committed version and current, unstaged changes

`git status` - displays the status of files, untracked/tracked, staged/unstaged

`git branch` - lists git branches

`git restore <FILE>` - unstages a modified file, keeps edits

`git checkout <FILE>` - unstages and removes edits, restores a file to its previously committed version

`git reset HEAD` - undo changes and specify a commit to restore

`git revert HEAD/134dssd4` - undo commits

`git log` - lists previous commit history, by default author, email, date, message, checknum

`git stash`

`git stash pop`
