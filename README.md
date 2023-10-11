# Portfolio

Module 1 iteration of your portfolio. We've got a lot of new concepts here so you might want to work through this in your study group, or bring to class for help.

_Keep your changes simple!_

We are using a different type of pull request workflow from your main coursework. We're doing this because we need lots of practice with Git to be ready to contribute to shared repos like professional developers. In previous cohorts, we only opened PRs to main all the way through the course, and then in Final Projects it was really hard to learn real branching and merging. So let's practice a different workflow now.

## Learning Objectives

- [ ] Branch from a branch in Git
- [ ] PR from a branch to a branch in GitHub
- [ ] Create a personal case study for a project

## Requirements

Your case study should be a short description of the project, including: the problem it solves, the technologies used, the approach taken, a link to the deployed project, and a link to the code on GitHub.

Explain the problem and your solution in your own words, and don't just copy and paste the project brief. The point of a portfolio is to make _you stand out_, so write in your own voice. It's fine to choose something that you didn't work on all by yourself, but make sure you explain what part you did.

## Git Ready: Putting our code in the right place

The instructions here are given for the command line, but you could just as easily do this in GitHub Desktop or GitKraken.

1. Switch into the branch called `git checkout Module-HTML-CSS` to access this Readme
1. From `Module-HTML-CSS`, create a new branch `git checkout -b your-name-portfolio`
1. Make a new directory `mkdir your-name-portfolio`
1. Move your starter files into this directory `mv index.html style.css your-name-portfolio`
1. Change into the new directory `cd your-name-portfolio`
1. Check you are in the right branch `git branch --show-current`

## Git Set: Making changes

1. Open the project in your code editor
1. Make your changes
1. Check your changes with `git status`
1. Add your files to the staging area `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes often `git commit -m "YOUR COMMIT MESSAGE"`

## Git Go: Making a pull request

1. Stage your files: `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes `git commit -m "YOUR COMMIT MESSAGE"`
1. Push your changes to GitHub `git push origin your-name-portfolio`
1. Open a pull request to merge your branch into `Module-HTML-CSS` . If you have the [GitHub CLI](https://cli.github.com/manual/gh_pr_create) installed, you can do this with `gh pr create --base Module-HTML-CSS --head your-name-portfolio`. Otherwise do it in the GitHub UI or your Git client.

## Acceptance Criteria

- [ ] My portfolio introduces me and my work
- [ ] The design and code is my own, not a template or tutorial (you can use this code as a starting point)
- [ ] Each project is linked to my code on Github and the deployed project
- [ ] I have published my professional contact information on my portfolio
- [ ] My Accessibility and SEO scores are 100 on Lighthouse
- [ ] My portfolio is deployed
- [ ] I have replaced this README with one that describes my own portfolio

## Resources

- [Powerful Git Completion with ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)
- [GitKraken](https://www.gitkraken.com/)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens/)
