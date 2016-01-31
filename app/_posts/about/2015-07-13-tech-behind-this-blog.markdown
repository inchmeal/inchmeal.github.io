---
layout: blog
title:  "Tech behind this blog"
tags: blogging jekyll gulp gh-pages lunr foundation
sitemap:
    priority: 0.8
---
From last 2-3 weeks I have been working on creating this blog. Still there are few items remaining to be completed.

I was looking for something that is free and provides maximum flexibility. Static site generators and [Github pages][ghpages] support for static sites looked promising. One of the things that I loved of this setup is writing posts in your preferred editor and complete control over your data.
<!--more-->
Initially I was inclined towards python based site generators as it will give me an opportunity to learn python but I ended up with [Jekyll][jekyll] as of its github pages support. Now I am happy with Jekyll even though I am not using github pages jekyll support.

### Initial Setup ###
I started looking out for available themes built on jekyll for a starting point. Bootstrap and foundation both are great front end frameworks. As most of the themes I saw were developed on Bootstrap, I thought of using foundation as it might help me to get a different look and feel.

There are not many boilerplate code/themes available for jekyll in [foundation][foundation]. I started building it ground up following instructions from [Code daddy][codedaddy]. It started appearing to be a time consuming task and in the mean time I found an excellent theme, [Feeling responsive][feelingresponsive] developed on foundation. The best part I liked about this theme is it contains all the possible layouts I might need.

After customizing and including only the required parts of the theme, I have my blog up and running on github(with jekyll support) within few days. Thanks to [feeling responsive][feelingresponsive], [jekyll][jekyll], [github pages][ghpages] and [foundation][foundation].

At this point I had following requirements:

* Provide search on posts.
* Build an archive page.
* Easy way to update the js/ui libraries.
* Automation of tasks for js/css minification and deployment.

### Search and Archives ###

There are many available ways to provide search on static sites. Google custom search is a good option but it may require creation of an overlay or moving the control to a different page.

For archives,  it will be nice to have an easy access of posts by year/month or tag. One way to achieve this is  creating separate pages for each tag, month/year, which does not look a great solution.

[Lunr][lunr] is an excellent javascript library that provides client side search based on reverse document lookup. It will be very fast as no network calls are involved.

One alternative for lunr can be using Bloom filters. Bloom filters provide fast lookups to check if a word is present in a  document(using hash of the document). It works on probability model and may result in returning a document even if the searched word is not present in it. However it will not miss any documents containing the searched word. Using Bloom filters will require additional work to support searches on multiple words. I continued with lunr as it will be easy to integrate and sufficient for the needs.

Lunr provides an api for indexing and searching. All posts/pages to be made searchable will be added for indexing. Enabling search for all content of the posts may cause performance issues in future when number of blogs grow.

Indexing is relatively a slow process. One approach for optimization is indexing at the backend. Lunr provides support to create index file and loading it later. I used node.js environment for executing javascript at backend for index creation.

I merged my ideas for archives and search into a single page:

* Search is enabled only for tags.
* A section is added on this page containing all the tags and number of posts under each tag.

It may sound an over-optimization on limiting the searches to tags for performance but it is sufficient for my needs.
Including year and month also in the search will solve the problem for archive pages.

A point to note about lunr(version: 0.5.11) is it provides searches only for "and" conditions between the search terms. I hope, support for boolean queries will eventually happen in future releases.

### Github pages with nojekyll ###

Index creation at backend requires some support from github pages while it generates the site using jekyll. As github pages executes jekyll in safe mode, I cant add any plugin for indexing at backend. Thus I have to manually index at my local machine and push it to github.

It seems like a big limitation for not having any possibility to add plugins to github pages. It may cause more problems in future when I work on some data sources for doing some stats and putting few D3 plots on the blog.

This resulted in creating two branches on github: one branch for code and other branch(master) for the generated content.

### Maintaining updates of libs ###

While working for indexing at backend, I saw a new release for lunr. To use it I need to again copy it to my dev environment. It was definitely not a great way for maintaining updates.

From my limited or no experience with UI, I was not aware of any tools for package management. I found an excellent [post][packagemanagement] on package management tools: [npm][npm] and [bower][bower].

Npm provides support for package management for backend js libraries. Bower is a package management tool for front end(browser) and provide support for js,html and css components.

Both Npm and Bower have very rich eco-systems around them. It seems like most, if not all, of the UI libraries are available though them.
This resulted in installing all backend libraries(like lunr) using npm and front end libraries(like foundation) using bower.

### Automation ###

Grunt and Gulp are two great build tools available. As a matter of choice, I preferred gulp style of code over configuration. I found a great [tutorial][gulp-tutorial] that helped me setup all my build process. I ended up using most of the directory structure and gulp tasks from this tutorial.

There are a lot of plugins available for gulp for doing almost every task that may be required. Whether it is a simple concat of js/css files, minifying js/css or deploying to gh-pages, a plugin is available for every task.

With help of gulp and these great plugins, I completely automated the build process. Now using just one command can generate the site using jekyll, creates index, do minify js and css and as well as push all the changes to the server(github pages).

### Client side MVC ###

I have also used an MVC framework, [backbone][backbone] for creating archives page. Backbone helped in many ways like browser history and creating book-markable urls for searched tags. Overall it gave a good organization to the code which otherwise might have ended up in a convoluted structure of DOM manipulations using jquery.

### Conclusion ###

Blog creation ended up taking more time than it was planned but I completely enjoyed the process. From package management to MVC frameworks, I learned of the many great things going on with UI.

While I liked the node.js excellent eco-system, I hope that same level of tools and packages for UI should be available for modern languages like clojure or scala. Javascript is not a great language to work on. It is relatively difficult to find issues with the code written in js and many times are silently ignored by interpreter.

[bawlipoonch]: http://bawlipoonch.github.io
[codedaddy]: http://learningwithsage.com/wp/a-guide-to-setting-up-a-jekyll-and-foundation-based-site-in-github/
[feelingresponsive]: https://phlow.github.io/feeling-responsive/
[foundation]: http://foundation.zurb.com/
[jekyll]: http://jekyllrb.com
[ghpages]: https://pages.github.com
[lunr]: http://lunrjs.com
[packagemanagement]: http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer#front_end_developers
[npm]: https://www.npmjs.com
[bower]: http://bower.io
[gulp-tutorial]: http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup
[backbone]: http://backbonejs.org
