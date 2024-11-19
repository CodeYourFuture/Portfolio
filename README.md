# Portfolio

Module 2 iteration of your portfolio. We're adding a new case study for another project you've worked on. You can choose anything.

_Keep your changes simple!_

We are going to use the same Git workflow as Module 1, which you can read by checking out the `Module-HTML-CSS` branch or by going to the [tree view on Github](https://github.com/CodeYourFuture/Portfolio/tree/Module-HTML-CSS).

## Learning Objectives

- [ ] Branch from a branch in Git
- [ ] Merge a branch into another branch in Git
- [ ] Create a second personal case study for a project

## Requirements

Your case study should be a short description of the project, including: the problem it solves, the technologies used, the approach taken, a link to the deployed project, and a link to the code on GitHub.

Explain the problem and your solution in your own words, and don't just copy and paste the project brief. The point of a portfolio is to make _you stand out_, so write in your own voice. It's fine to choose something that you didn't work on all by yourself, but make sure you explain what part you did.

## Git Ready: Getting our code together

Our changes have disappeared! That's because we made them on another branch. We're going to grab those changes and put them on our new branch.

1. Checkout the `Module-JS-1` branch `git checkout Module-JS-1`
1. Make a new branch `git checkout -b your-name-portfolio-js-1`
1. Merge your changes from your last branch `git merge your-name-portfolio`

Whoa! Did your README disappear? That's because you overwrote it. But you can access specific files in the terminal any time you like, like this: `git checkout Module-HTML-CSS README.md`. Or you can do this in your Git GUI.

## Git Set: Making changes

1. Open the project in your code editor
1. Make your changes
1. Check your changes with `git status`
1. Add your files to the staging area `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes often `git commit -m "YOUR COMMIT MESSAGE"` Do not wait until your PR is done to commit. Commit early and often.

## Git Go: Making a pull request

1. Stage your files: `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes `git commit -m "YOUR COMMIT MESSAGE"`
1. Push your changes to GitHub `git push origin your-name-portfolio-js1`
1. Open a pull request to merge your branch into `Module-JS-1`. _Add a link to your deployed project in the description._

## Acceptance Criteria

- [ ] My portfolio introduces me and my work
- [ ] The design and code is my own, not a template or tutorial (you can use this code as a starting point)
- [ ] Each project is linked to my code on Github and the deployed project
- [ ] I have published my professional contact information on my portfolio
- [ ] My Accessibility and SEO scores are 100 on Lighthouse
- [ ] My portfolio is deployed and I have included the link in my pull request
- [ ] I have replaced this README with one that describes my own portfolio

## Resources

- [GitHub Desktop Merge](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch#merging-another-branch-into-your-project-branch)
- [GitKraken Merge](https://www.youtube.com/watch?v=mS8oUqqc2G8)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens/)
