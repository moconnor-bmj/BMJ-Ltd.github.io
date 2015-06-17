## Installation

The Tech site site requires [Jekyll](http://jekyllrb.com/) 2.2+. Make sure to run `gem update jekyll` if you aren't on the latest version or `gem install jekyll` if this is your first time installing it.

If you are creating a new Jekyll site using this theme follow these steps:

1. Fork the [BMJ Tech Site repo](http://github.com/BMJ-Ltd).
2. Clone the repo you just forked and rename it.
3. [Install Bundler](http://bundler.io) `gem install bundler` and Run `bundle install` to install all dependencies (Jekyll, [Jekyll-Sitemap](https://github.com/jekyll/jekyll-sitemap), [Octopress](https://github.com/octopress/octopress), etc)
4. Update `config.yml` to point to http://localhost:4000. Full details below.

---

## Running Jekyll

If `jekyll build` and `jekyll serve` throw errors you may have to run Jekyll with `bundled exec` instead.

> In some cases, running executables without bundle exec may work, if the executable happens to be installed in your system and does not pull in any gems that conflict with your bundle.
>
>However, this is unreliable and is the source of considerable pain. Even if it looks like it works, it may not work in the future or on another machine.

{% highlight text %}
bundle exec jekyll build

bundle exec jekyll serve
{% endhighlight %}

---

## Site Setup

A quick checklist of the files you'll want to edit to get up and running.

### Site Wide Configuration

`_config.yml` is your friend. Open it up and personalize it. Most variables are self explanatory but here's an explanation of each if needed:

#### title

The title of your site... shocker!

Example `title: My Awesome Site`

#### url

Used to generate absolute urls in `sitemap.xml`, `feed.xml`, and for generating canonical URLs in `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

---

## Adding New Content with Octopress

While completely optional, I've included Octopress and some starter templates to automate the creation of new posts and pages. 
To take advantage of it start by installing the [Octopress](https://github.com/octopress/octopress) gem if it isn't already.

### New Post

Default command

  $ octopress new post "Post Title"

Default works great if you want all your posts in one directory, but if you're like me and want to group them into subfolders like `/posts`, `/portfolio`, etc. Then this is the command for you. By specifying the DIR it will create a new post in that folder and populate the `categories:` YAML with the same value.

  $ octopress new post "New Post Title" --dir posts

### New Page

To create a new page use the following command.

  $ octopress new page new-page/

This will create a page at `/new-page/index.md`

---

## Layouts and Content

Explanations of the various `_layouts` included with the theme and when to use them.

### Post and Page

These two layouts are very similar. Both have an author sidebar, allow for large feature images at the top, and optional Disqus comments. The only real difference is the post layout includes related posts at the end of the page.

### Post Index Page

A [sample index page]({{ site.url }}/posts/) listing all posts grouped by the year they were published has been provided. The name can be customized to your liking by editing a few references. For example, to change **Posts** to **Writing** update the following:

* In `_config.yml` under `links:` rename the title and URL to the following:

  links:
  - title: Writing
    url: /writing/

* Rename `posts/index.md` to `writing/index.md` and update the YAML front matter accordingly.
* Update the **View all posts** link in the `post.html` layout found in `_layouts` to match title and URL set previously.

### Feature Images

A good rule of thumb is to keep feature images nice and wide so you don't push the body text too far down. An image cropped around around 1024 x 256 pixels will keep file size down with an acceptable resolution for most devices. If you want to serve these images responsively I'd suggest looking at the [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag) plugin[^plugins].

[^plugins]: If you're using GitHub Pages to host your site be aware that plugins are disabled. You'll need to build your site locally and then manually deploy if you want to use this sweet plugin.

The post and page layouts make the assumption that the feature images live in the `images/` folder. To add a feature image to a post or page just include the filename in the front matter like so. It's probably best to host all your images from this folder, but you can hotlink from external sources if you desire.

{% highlight yaml %}
image:
  feature: feature-image-filename.jpg
  thumb: thumbnail-image.jpg #keep it square 200x200 px is good
{% endhighlight %}

To add attribution to a feature image use the following YAML front matter on posts or pages. Image credits appear directly below the feature image with a link back to the original source if supplied.


image:
  feature: feature-image-filename.jpg
  credit: AN Other #name of the person or site you want to credit
  creditlink: http://bmj.com #url to their site or licensing


### Author Override

By making use of data files you can assign different authors for each post.

Start by modifying `authors.yml` file in the `_data` folder and add your authors using the following format.

From the theme's root, use `grunt` concatenate JavaScript files, and optimize .jpg, .png, and .svg files in the `images/` folder. You can also use `grunt dev` in combination with `jekyll build --watch` to watch for updates JS files that Grunt will then automatically re-build as you write your code which will in turn auto-generate your Jekyll site when developing locally.

---

## Questions?

Found a bug or aren't quite sure how something works? [File a GitHub Issue](https://github.com/BMJ-Ltd). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the MIT License. So feel free to use this Jekyll theme on your site without linking back to me or including a disclaimer. 
