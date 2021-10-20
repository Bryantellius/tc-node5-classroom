# Review 10/20/21: Git Branches and Merge Conflicts

## Why Branches?

> Use branches to work in a seperate copy of the project apart from the default branch or production branch. Allows for more test/fixes apart from working code, and more collaboration.
> Branches can be merged, to integrate completed changes into working code

## What is a Merge Conflict?

> Merge conflicts occur when there a overlapping changes in commits on two different branches that are attempted to be merged.

## Git Branch/Merge Commands

`git checkout <branchname>` - switches working directory to specified branch

`git fetch <remote> <branchname>` - gets the remote updates for a branch and brings them to be merged or compared

`git merge <branchname>` - merges the specified branch into the currently checked out branch

`git pull` - fetches updates from the remote upstream branch, and attempts an automatic merge locally

`git clone <url>` - copy/clone a remote repo to your local machine

`git merge --abort` - merge conflict occurs, undo attempted merge

`git revert` - undo commits

`git push <remote> <branchname>` - pushes latest commits to remote repo

`git branch -d <branchname>` - delete local branches

`git push -d <remote> <branchname>` - pushes message to delete remote branch on remote repo

`git diff [--staged]` - show changes from the previously committed version and the working changes, `--staged` to check differences from staged files

`git add .` - stage files

`git commit -m "message"` - commit staged files

`git push` - push changes to the remote upstream branch
