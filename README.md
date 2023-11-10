# obsidian-helpful-bits

A few helpful bits for Obsidian.  This includes some scripts and CSS snippets I've written, using things like [ITS-Theme](https://github.com/SlRvb/Obsidian--ITS-Theme) and [Templater](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/system-module.html).

## Templater Templates and Helper Scripts

 - `arxiv-annotate.md` - a simple annotation template for the `annotator` plugin, which uses arxiv URLs
 - `arxivGrabber.js` - meant to be used with the `annotator` plugin, and `arxiv-annotate.md` as the templater template
 - `frontmatterKeyValues.js` - get all the known values for a given key in the frontmatter, querying only by a particular tag
 - `leafFinder.js` - find all the stem tags given a base tag
 - `meeting-notes.md` - Meeting notes including attendees template
 - `meeting-todo.md` - insert this while in a meeting and it will add a todo with an assigned person from the attendees list
 - `otherSelection.js` - add an `Other` option to suggester, and prompt if that's chosen
 - `person-entry-header.md` - included in all person entries, to grab info and present it nicely
 - `person-entry.md` - information about a person, including a dashboard of meetings they attended
 - `quick-idea.md` - this creates a new 'quick idea' note for a project
 - `safeRenamer.js` - move something to another directory and rename it in one go, but avoid collisions and create folders.
 - `shuffler.js` - shuffle an array
 - `slugger.js` - turn something into a filesystem-safe slug
 - `video-notes.md` - take notes on YouTube videos using the `timestamp` plugin
 - `videoMetadata.js` - get a little bit of YouTube video metadata.

## CSS Snippets

These use the Style Settings plugin.

 - `Dice Roller Styling.css` - allow setting dice roller colors (for each of the three components) individually
 - `Disable Clicking.css` - allow disable clicking on "Alternate Checkmarks" from ITS-Theme.
 - `canvas-stuff.css` - change border of canvas cards by setting `cssclass` in the frontmatter of a canvas card to `canvas-{style}` where `{style}` is one of the `border-style` values allowed in CSS.  (dotted, dashed, etc.)

## DCC Stuff

I wrote up a little bit of stuff to support [Dungeon Crawl Classics](https://goodman-games.com/) in the [javalent](https://plugins.javalent.com/) ecosystem.

I should also note: I haven't actually played using these.  Maybe I will some day, but it's been really fun to use it as a way to learn more about Obsidian.

 - `dcc/DCC.json` - a statblock for DCC which, honestly, could probably use some work.
 - `dcc/namegen.js` - a slightly modified version of [skeeto's namegen](https://github.com/skeeto/fantasyname/blob/master/ts/namegen.ts) that works in Obsidian.
 - `dcc/zero-level-character.md` - a template to generate a single zero-level character.
 - `dcc/zero-level-party.md` - a template to generate a party of zero-level characters and register it with the initiative tracker.
 - `dcc/zeroLevel.js` - a script for using tables in your vault to make up a Zero-level character.  For instance, if you have notes named `Table 1-3 - Occupations` and `Table 1-2 - Lucky Sign` with the appropriate contents, it can query them.  One thing to note is that if you use multiple columns, make sure you expand your table because the dice roller can't do ranges with more than two columns.  This is called by the two templates above.
