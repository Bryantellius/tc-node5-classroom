# Git Introduction

<table>
  <tr>
   <td> 

[![gif1](gif1.gif)](https://vimeo.com/499737170/cc52a139dc)

   </td>
  </tr>
  </tr>
  <tr>
   <td>Click the gif to view the Lecture Video
   </td>
  </tr>
  <tr>
   <td> 

[![gif2](gif2.gif)](https://vimeo.com/499800324/4231788a62)

   </td>
  </tr>
  <tr>
   <td>Click the gif to view the Lecture Video
   </td>
  </tr>
  
</table>

# Why:

We cover Git because it is a **Distributed Version Control System**. Distributed means there is no central server required, so work can be done “Offline” simultaneously with someone else also working offline. In the past, with traditional **Centralized Version Controls Systems**, two people editing a file was very difficult and sometimes whomever saved the file last would overwrite someone else's work.

[Git was created by Linus Torvalds in 2005 for development of the Linux kernel](https://www.linuxjournal.com/content/git-origin-story), with other kernel developers contributing to its initial development and is a [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software).

Also:

While we are using Git, we will be using the command prompt / terminal a lot. Here is a great cheat sheet for those commands: [https://files.fosswire.com/2007/08/fwunixref.pdf](https://files.fosswire.com/2007/08/fwunixref.pdf)

**GitHub Cheat Sheet:**

**<span style="text-decoration:underline;"> [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)</span>**

# What:

**Version Control** is a means for managing your source code

Version Control allows you to:
- Access previous versions of your code (History of content changes)
- Have multiple working copies of your code
- Backing up your code is now trivial
- Share your work with other people easily and facilitates collaborative changes to files

Version Control Systems are usually represented with a tree data structure

![alt_text](pic1.png "image_tooltip")

## **Git:**

A **[distributed version-control](https://en.wikipedia.org/wiki/Distributed_version_control) system (DVCS)** for tracking changes in [source code](https://en.wikipedia.org/wiki/Source_code) during [software development](https://en.wikipedia.org/wiki/Software_development). It is designed for coordinating work among [programmers](https://en.wikipedia.org/wiki/Programmer), but it can be used to track changes in any set of [files](https://en.wikipedia.org/wiki/Computer_file).

**Git != GitHub: _(Git is not the same as GitHub)_**

So while Git is a tool to manage your source code history, GitHub is a hosting service for Git repositories

### Git is the tool, GitHub is a service for projects that use Git

GitHub is where our **Remote repository** will live. Our computer is where our Local repository will live. Once we have our project in a working state, we can push what’s in our Local repository to our Remote repository.

## **Making Commits:**

The traditional software expression of "saving" is synonymous with the Git term "committing". **A commit is the Git equivalent of a "save".**

The **git commit** command captures a snapshot of the project's currently staged changes.

![alt_text](pic2.png "image_tooltip")

Each circle in the above diagram is a commit – a **snapshot** of the project

## **Remote repositories:**

Versions of your project that are hosted on the Internet or network somewhere (like GitHub!).

---

Collaborating with others involves managing these remote repositories and **pushing** and **pulling** data to and from them when you need to share work.

With **Remote Repositories** we usually use these **git commands:**

- **git clone** : puts a copy of the remote repository on our machine

- **git push** : after we worked on the local version of the repository, we can push those changes to the remote

- **git pull** : pulls the latest version of the remote repository to our machine. We use this after we have already cloned a copy of the remote repository to our local machine because someone else may have updated the remote in the meantime. So we want to make sure we have the most up to date version

## **Staging with git add:**

- **git add <filename>** - add a specific file to the staging area

- **git add .** - add all modified files to the staging area. the period is what chooses all files

The **git add** command adds a change in the working directory to the **staging area**. It tells Git that you want to include updates to a particular file in the next commit. However, **git add** doesn't really affect the repository in any significant way—changes are not actually recorded until you run **git commit**.

![alt_text](pic3.png "image_tooltip")

## **Moreover on Staging:**

Stage lets you group related changes into highly focused snapshots before actually committing it to the project history. This means you can `make all sorts of edits to unrelated files, then go back and split them up into logical commits by adding related changes to the stage and commit them piece-by-piece.

# **Workflow:**

Developing a project revolves around the basic **edit/stage/commit** pattern.

## 1. **Edit**
   -  Do work (edit your files in the working directory)

## 2. **Stage**
   -  When you’re ready to save a copy of the current state of the project, you can stage all your changes with:
   - **git add .**
## 3. **Commit**
   -  After you’re happy with the staged snapshot, you commit it to the project history with:

   - **git commit –m "a descriptive message"**

## 4. **Send to GitHub (remote repository)** 

- **git push -u origin** (only for first push)

-  In addition to **git add** and **git commit**, a third command **git push** is essential for a complete collaborative Git workflow. **git push** _is utilized to send the committed changes to remote repositories for collaboration._ This enables other team members to access a set of saved changes.

## **Basic Terminal (Mac)/Git Bash Commands:**

- **_ls_** - lists available directories for you to **_cd_** to
- **_cd directoryName_** - change current directory to the specified directory
- **_touch fileName_** - Create a file named fileName
- **_pwd_** - prints your current directory
- **_code ._**- opens an instance of VS Code at your current directory 

## **Basic Command Prompt (Windows) Commands:**
- **_dir_** - lists available directories for you to **_cd_** to
- **_cd directoryName_** - change current directory to the specified directory
- **_echo example > fileName_** - Creates a file named **_fileName_** and writes - **_example_** inside
- **_echo %cd%_** - prints your current directory
- **_code ._**- opens an instance of VS Code at your current directory

## **Basic Git Commands:**
- **_For Mac: to show hidden files: cmd-shift-._**
- **_git init_** : initializes a new repository in the current directory
- **_git status_** : The git status command displays the state of the working - directory and the staging area. It lets you see which changes have been staged, - which haven't, and which files aren't being tracked by Git
- **_git add <fileName\>_** : stages a file so it is ready to commit
- **_git add ._** : stages all files in the directory so they are ready to commit
- **_git commit -m “this is my first commit”_** : commits the changes in the - currently staged files and includes a message
- **_git push_** :tells git that you're ready to push your local changes. Just - tell git where to push
- **_git push <remote-name\> <branch-name\>_**
- **_git push -u origin main_**
- **_git clone <remote url\> : copy a remote repository to your local machine. - Very collaborative_**
- **_git branch_**: lists the branches in the repository
- **_git branch <name\>_**: creates a new branch
- **_git checkout <name\>_:** switches to a specific branch
- **_git checkout –b <name\>: creates a new branch, and switches to that branch at - the same time_**
- **_git merge <name\>_** :merges a specific branch into the current branch
- **_git pull_** :downloads content from a remote repository and immediately - update the local repository to match that content
- **_git log_** :display our commit history
- **_git diff_** :enables you to compare changes in the working directory against - a previously committed version
- **_git config --global user.email "[you@example.com](https://meet.google.com/-linkredirect?authuser=0&dest=mailto%3Ayou%40example.com)"_**
- **_git config --global user.name "Your Name"_**

## **Git Documentation: [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)**

# Quiz:

## **[Take the Git Intro Quiz](https://forms.gle/AH2jspgH6tUWucue7)**

____

<table>
  <tr>
   <td>

[![gif3](gif3.gif)](https://vimeo.com/499770313/3e5d97d45d)

   </td>
  </tr>
  <tr>
   <td>Click the gif to watch the quiz recap after you’ve taken the quiz
   </td>
  </tr>
</table>

## **Work Cited: <span style="text-decoration:underline;"> [https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)</span>**

## **GitHub Cheat Sheet: <span style="text-decoration:underline;"> [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)</span>**

## **Getting Started Documentation and Tutorial: <span style="text-decoration:underline;"> [https://www.learnenough.com/git-tutorial/getting_started](https://www.learnenough.com/git-tutorial/getting_started)</span>**
