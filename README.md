opensavannah.org
=====================

Open Savannah is a platform for civic innovation. As an open source organization, you can fork our code including our website. Help us make the site better by [forking it](https://help.github.com/articles/fork-a-repo/), adding new content or features, and [submitting a pull request](https://help.github.com/articles/creating-a-pull-request/)!

## Updating content
Most minor content updates can be made simply by making changes on your forked copy of this repository, then submitting a pull request. For example, following every event, the file `_layouts/home/cta.html` should **always** be updated to reflect the date of the next event.

MORE TK

---

## Local Development 
If you want to make significant changes to the site, it's recommended you do so on your local machine first so as to speed up the development process. Here's how to do that.

### Requirements
* [Ruby 1.9.3 or later](https://www.ruby-lang.org/en/documentation/installation/)
* [Bundler](http://bundler.io/)
* [Git](https://git-scm.com/downloads)
* Text Editor

### Installation

#### Clone the Repository
`git clone https://github.com/code4sac/codeforsacramento.org.git`

#### Install Dependencies
`bundle`

#### Build the Pages
`jekyll build`

#### Serve the Pages
`jekyll serve --watch`

### Hack Away

With `jekyll serve --watch` running, you should be able to access the site on [http://localhost:4000](http://localhost:4000)! Thanks to the `--watch` flag, any changes you make to the markdown (md) files will update automatically! 

For reference, here's an [awesome markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Contribute, change things, submit a pull request! We will all contribute.
