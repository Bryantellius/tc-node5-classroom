[![gif1](/assets/images/lectures/Git%20Conflict%20Resolution/gif1.gif)](https://vimeo.com/499770628/308e129ad5)

Click the gif to view the Lecture Video

<br>

# Why

We teach conflict resolution in git because sometimes merging won’t be so simple. This is especially true when we start collaborating with others, whether in the community or in the workplace. Knowing how to resolve merge conflicts and utilizing the full power of git will give you a great advantage in the workplace and will allow your workflow to achieve new heights.

<br>

# What

## Merge Conflict

A conflict occurs when there are two changes in the same line or set of lines in two different commits. It’s important to note that git doesn’t know how to code in C#. Git doesn’t know what to do when you have two edits of the same line, so git will mark the conflict and allow the user to decide which edit to pick or what changes to make.

In the situation below, there are two branches: a "bugfix" branch with a few commits coming off the "master" branch.

![alt_text](/assets/images/lectures/git/git-merge-conflict-resolution1.png)

In this case, merging "bugfix" back into "master" is not much of an issue. That's because the state of "master" has not changed since "bugfix" was created. Git will merge this by moving the "master" position to the latest position of "bugfix". This merge is called a "**fast-forward**" since the possibility of a conflict cannot exist.

In the example below, however, "master" has been updated several times since "bugfix" was branched out. The changes from "bugfix" and "master" need to be combined when a merge is executed on these two branches.

![alt_text](/assets/images/lectures/git/git-merge-conflict-resolution2.png)

For this sort of merge, a "merge commit" will be created, and the "master" position will be updated to the newly created merge commit.

![alt_text](/assets/images/lectures/git/git-merge-conflict-resolution3.png)

## Resolve Merge Conflicts

1. **Abort** - stop the process

   ```sh
   git merge --abort
   ```

2. **Resolve the conflict manually** - go through the code and making edits

   ```sh
   git diff --color-words master..branch1 filename.txt
   ```

   or

   ```sh
   git show --color-words
   ```

   - Take out the git markers and choose what changes we want.

   ```sh
   git status
   git add filename.txt
   git status
   git commit -m "with a descriptive message"
   ```

DONE

<br>

## BONUS

```sh
git log --graph --all --online --decorate
```

- **Merge Tool:**

```sh
git help mergetool
```

Example tool: [http://kdiff3.sourceforge.net/](http://kdiff3.sourceforge.net/)

## Git Documentation

There are many things that you can do with Git that are not covered in this lesson. Check out the documentation below for more information!

[https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)

[https://backlog.com/git-tutorial/using-branches/git-switch-branches/](https://backlog.com/git-tutorial/using-branches/git-switch-branches/)

<br>

# How

Usually, a merge conflict can arise when the master has been updated since you created your new branch (based on master). Maybe someone edited the same lines you were intending to edit without your knowledge. You don’t have to throw all of your work away! We can simply resolve the conflict points and get your work into the master branch!

We’ll show this merge conflict from this git repository: [Github - mvdoyle/MergeConflictExercise](https://github.com/mvdoyle/MergeConflictExercise)

## Resolving a conflict manually

1. Inspect the newBranch

   ```sh
   git checkout newBranch
   ```

2. Switch to master branch

   ```sh
   git checkout master
   ```

3. Merge newBranch into master

   ```sh
   git merge newBranch
   ```

4. Resolve the merge conflict (choose which changes to keep)

- Remove `>>>>>>>` and `==========` from your code along with the changes you want removed (current or incoming)

  ![alt_text](/assets/images/lectures/git/git-merge-conflict-resolution4.png)

5. After we have taken out the git markers and chosen what we want, we need to stage and commit:

   ```sh
   git status
   git add .
   git status
   git commit -m “ a descriptive message”
   ```

CONFLICT RESOLVED

<br>

## BONUS

These are bonus commands to show more information about the commit history and helps you to better visualize the changes that are present (NOT NECESSARY)

```sh
git log --graph --all --online --decorate
```

```sh
git diff --color-words master..branch1 filename.txt
```

--OR--

```sh
git show --color-words
```

<br>

# Quiz

[![gif3](/assets/images/lectures/Git%20Conflict%20Resolution/gif3.gif)](https://vimeo.com/truecodersio/review/575096184/f8a277742c)

Click the gif to watch the Quiz Recap Video AFTER you have finished taking the quiz

<br>
