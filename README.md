# obsidian-helpful-bits

A few helpful bits for Obsidian.  This includes some scripts and CSS snippets I've written, using things like [ITS-Theme](https://github.com/SlRvb/Obsidian--ITS-Theme) and [Templater](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html).

## Templater Templates and Helper Scripts

 - `arxiv-annotate.md` - a simple annotation template for the `annotator` plugin, which uses arxiv URLs
 - `arxivGrabber.js` - meant to be used with the `annotator` plugin, and `arxiv-annotate.md` as the templater template
 - `frontmatterKeyValues.js` - get all the known values for a given key in the frontmatter, querying only by a particular tag
 - `leafFinder.js` - find all the stem tags given a base tag
 - `otherSelection.js` - add an `Other` option to suggester, and prompt if that's chosen
 - `safeRenamer.js` - move something to another directory and rename it in one go, but avoid collisions and create folders.
 - `shuffler.js` - shuffle an array
 - `slugger.js` - turn something into a filesystem-safe slug
 - `video-notes.md` - take notes on YouTube videos using the `timestamp` plugin
 - `videoMetadata.js` - get a little bit of YouTube video metadata.

## CSS Snippets

These use the Style Settings plugin.

 - `Dice Roller Styling.css` - allow setting dice roller colors (for each of the three components) individually
 - `Disable Clicking.css` - allow disable clicking on "Alternate Checkmarks" from ITS-Theme.
