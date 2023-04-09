# Portfolio

Module 3 iteration of your portfolio. We're adding a new case study for another project you've worked on. You can choose anything.

_Keep your changes simple!_

We are going to use the same Git workflow as Module 1, which you can read by checking out the `Module-HTML-CSS` branch or by going to the [tree view on Github](https://github.com/CodeYourFuture/Portfolio/tree/Module-HTML-CSS).

## Learning Objectives

- [ ] Create a third personal case study for a project
- [ ] Decompose your styles into components
- [ ] Compose your styles using components
- [ ] Run a build script to generate your CSS from SASS partials

## Requirements

Your case study should be a short description of the project, including: the problem it solves, the technologies used, the approach taken, a link to the deployed project, and a link to the code on GitHub.

In this module, we're using [SASS](https://sass-lang.com/documentation) to write our CSS. All CSS is valid SASS, so this time we've just copy and pasted the previous CSS into the SASS partial/component files.

I've broken the style, from the previous module, down into components for you. You can find them in the `sass` folder. If you're already writing your own styles for your portfolio, great! Start breaking them down into components now.

Then I've written a build script into package.json to compile all those pieces into one compressed CSS file. Do `npm i` to install the SASS module on your first run. Now you can run the build with `npm run build`. This is called a "build step". (This is just about the simplest build step you will ever see.)

This build script compiles your SASS into CSS and puts it in the `assets` folder. It doesn't do anything else, so you'll need to run it every time you make a change to your SASS. Is it frustrating? To develop your build script, you might want a `watch` script that runs the build script every time you save a file. How would you do that? Why don't you ask Chat GPT to explain it to you?

## Git Ready: Getting our code together

Our changes have disappeared! That's because we made them on another branch. We're going to grab those changes and put them on our new branch.

1. Checkout the `Module-JS-12` branch `git checkout Module-JS-2`
1. Make a new branch `git checkout -b your-name-portfolio-js-12`
1. Merge your changes from your last branch `git merge your-name-portfolio-js-1`

Whoa! Did your README disappear? That's because you overwrote it. But you can access specific files in the terminal any time you like, like this: `git checkout Module-JS-1 README.md`. Or you can do this in your Git GUI.

## Git Set: Making changes

1. Open the project in your code editor
1. Make your changes
1. Check your changes with `git status`
1. Add your files to the staging area `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes often `git commit -m "YOUR COMMIT MESSAGE"` Do not wait until your PR is done to commit. Commit early and often.

## Git Go: Making a pull request

1. Stage your files: `git add index.html style.css` . _Remember, don't `git add .` or you could add files you don't mean to._
1. Commit your changes `git commit -m "YOUR COMMIT MESSAGE"`
1. Push your changes to GitHub `git push origin your-name-portfolio-js2`
1. Open a pull request to merge your branch into `Module-JS-2`. _Add a link to your deployed project in the description._

## Acceptance Criteria

- [ ] My portfolio introduces me and my work
- [ ] The design and code is my own, not a template or tutorial (you can use this code as a starting point)
- [ ] Each project is linked to my code on Github and the deployed project
- [ ] I have published my professional contact information on my portfolio
- [ ] My Accessibility and SEO scores are 100 on Lighthouse
- [ ] My portfolio is deployed and I have included the link in my pull request
- [ ] I have replaced this README with one that describes my own portfolio

## Resources

- [Sassmeister](https://www.sassmeister.com/) - Sass playground
- [Sass documentation](https://sass-lang.com/documentation)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) - VS Code extension to compile SASS to CSS
- [Package JSON](https://docs.npmjs.com/files/package.json) - Documentation for the package.json file
- [The Bandit](https://overthewire.org/wargames/bandit/) A game to learn the basics of the command line
