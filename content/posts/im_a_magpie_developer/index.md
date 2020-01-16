---
title: I'm a magpie developer
description: I finally built one, for real this time
date: 2019-05-23
---

Well I did it Internet, I finally built my very own website, with colours and everything.

I've tried to do this 5 or so times now and each time I get part way through; some new shiny thing comes along annnnnnd I'm distracted, I'm basically a magpie developer.
Well not this time, I found a framework I like, a style system I like, and [stole enough time from comfort][steal-from-comfort] to roll them altogether to make all that you see before you.

## Under the hood

### VueJS

I wanted to use VueJS because I've had more experience with it and I use ReactJS sometimes during work so a bit of variety is nice.

### Gridsome

[![Gridsome VueJS Framework Logo](./gridsome_logo.svg "Gridsome VueJS Framework")][gridsome]

<q>Gridsome makes it easy for developers to build modern websites, apps & PWAs that are fast by default</q>

I'd say that's pretty accurate, I've been able to get this site up pretty quick using mostly what comes in the box, and some help from a few plugins like:

- [@gridsome/source-filesystem][filesystem-plugin]
- [gridsome-plugin-tailwindcss][tailwind-plugin]

Gridsome is quite neat in that is comes with the concept of CMS built right into the framework, I've opted for using a filesystem CMS as you can see from the plugin above, which means that
all of these blog posts are stored in markdown.

### TailwindCSS

[![Tailwind CSS Logo](./tailwind.svg "Tailwind CSS Logo")][tailwindcss]

TailwindCSS also came recommended from a few friends of mine. I've really enjoyed using the theming integrations that come with tailwind, as well as the ability to easily write plugins.

### Zeit Now

[![Zeit Logo](./zeit_now_logo.svg "Zeit Logo")][zeit]

There were a bunch of services I could've tried to launch this blog, but I landed on Zeit Now because it was suggested by a colleague as being easy to use. So far I've found the Github integrations have made the CD process really smooth so I've been deploying small things quite often.

#### Github Integration

To deploy to "Production" which currently tracks master, the plugin has a hook that detects new commits and triggers a deploy with the latest master. It behaves similarly for non-master branches, Now will generate a branch specific url that hosts that branch and I can test features without having to merge to master. The great part was it only took a few clicks to setup.

[steal-from-comfort]: https://sivers.org/uncomf
[gridsome]: https://gridsome.org/
[tailwindcss]: https://tailwindcss.com
[zeit]: https://zeit.co/
[filesystem-plugin]: https://gridsome.org/plugins/@gridsome/source-filesystem
[tailwind-plugin]: https://gridsome.org/plugins/gridsome-plugin-tailwindcss
[vuejs]: https://vuejs.org
