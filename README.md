opensavannah.org
=====================

Open Savannah is a platform for civic innovation. As an open source organization, you can fork our code including our website. Help us make the site better by [forking it](https://help.github.com/articles/fork-a-repo/), adding new content or features, and [submitting a pull request](https://help.github.com/articles/creating-a-pull-request/)!

Note: This site is hosted with GitHub pages and, as such, any changes you make to the repository will immediately be reflected on opensavannah.org.

## Updating content
Most minor content updates can be made simply by making changes on your forked copy of this repository, then submitting a pull request. For example, following every event, the file `_layouts/home/cta.html` should **always** be updated to reflect the date of the next event.

## Updating Call-to-Action for upcoming events
The CTA block just below the hero image can be quickly updated fairly easily:

1. Fork this repository to your own account if you haven't already.
2. Navigate to the file `_includes/home/cta.html`
3. Edit the file on your forked copy of the repository to reflect the updated text that needs to appear in the Call-to-Action.
4. Commit your changes.
5. Come back to this repository, select `Pull Requests` and issue a `Pull Request` to merge your changes into the main repository.
6. The changes then should automatically appear on the site in a few minutes!

*Note: If you have admin privileges to this GH org, you may committ your updates directly to the repository without forking your own copy, but do so with vigilance.*

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
