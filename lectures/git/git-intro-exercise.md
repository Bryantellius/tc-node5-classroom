# **Exercises:**

## **[Windows Exercise Walkthrough Documentation](https://docs.google.com/document/d/1KtSjsFNv_XmiY9rvSN93BzmCUmlIlwgcfTVeRMLOyHw/edit?usp=sharing)**

## **[Mac Exercise Walkthrough Documentation](https://docs.google.com/document/d/1aoUouylRs9ZeRDrRq96pdtpAZNKFfWRSUzbkFrBxhIg/edit?usp=sharing)**

# Exercise 1:

## 1. **Online Tutorial: Complete Scenario 1:**

### **How to Video: [](https://vimeo.com/449361446/b36121e1a2)** 
[![gif2a](gif2a.gif)](https://vimeo.com/449361446/b36121e1a2)

## **Topics covered in the tutorial:**
- git init
- git status
- untracked files
- git add
- git commit -m “message”
- gitignore
- git diff
- git diff --staged
- git log

# Exercise 2:

**Work with git on a simple pizza delivery algorithm file that covers the steps involved with ordering a pizza, and show how cool git can be with backing up our work:**

[![gif2b](gif2b.gif)](https://vimeo.com/501605388/9f41d9d902)
### 1. **Open terminal / command prompt / git bash on your computer**
### 2. **Set your name and email in git**
- **git config --global user.name "_Mona Lisa_"**
- **git config --global user.email "_[email@example.com](mailto:email@example.com)_"**
### 3. **Set your default git branch to main (We’ll get into branching in the next lecture!)**
- **git config --global init.defaultBranch main**
### 4. **Next we need to generate an SSH Key to authenticate our connection to GitHub.**

### [Mac SSH Key Setup](Mac-SSH-Key-Config.md)
### [Windows SSH Key Setup](Windows-SSH-Key-Config.md)


### 5. **Create a folder named repos on your computer (_this is where we ### will save all of our projects throughout the course_) → mkdir repos**
### 6. **cd into your repos folder → cd repos**
### 7. **Inside of your repos folder, create a folder named PizzaAlgo**
- **→ mkdir PizzaAlgo**
### 8. **cd into that folder with terminal / command prompt → cd PizzaAlgo**
### 9. **Initialize that folder as a git repository → git init**
### 10. **Your terminal / command prompt will look something like this:**

![alt_text](pic4.png "image_tooltip")

![alt_text](pic5.png "image_tooltip")

## **&#8593;&#8593;&#8593; _Visual Studio Code looks like this_** 

### 11. **Using the Visual Studio Code application, create a new file named Algo inside of your PizzaAlgo folder and save it.**

![alt_text](pic6.png "image_tooltip")

### 12. **Now we will add instructions for ordering pizza in this file**

![alt_text](pic7.png "image_tooltip")

### 13. **Use git to commit your changes as you add steps to the file**
   - **git add .**
   - **git commit -m “added order step”**
### 14. **Once your commits are ready, go to github and create a new EMPTY repository named PizzaAlgo**

# **Use the ‘new’ button on github:**

![alt_text](pic8.png "image_tooltip")

# **Your repository should look like this**

![alt_text](pic9.png "image_tooltip")

# **You will see a page that looks like this once created:**

![alt_text](pic10.png "image_tooltip")

### **Make sure SSH is enabled and NOT HTTPS**

## **&#8593;&#8593;&#8593; Copy the text from that page as you see above &#8593;&#8593;&#8593;**

15. **Go back to terminal/command prompt, paste the text you copied from github and hit enter**
16. **Your github repository should now contain the Algorithm you worked on from your computer**

## **Example ANSWER: [https://github.com/mvdoyle/PizzaAlgo](https://github.com/mvdoyle/PizzaAlgo)**