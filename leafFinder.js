async function tagLeafFinder(stemTag) {
    if (!stemTag.startsWith("#")) stemTag = `#${stemTag}`;
    if (!stemTag.endsWith("/")) stemTag = `${stemTag}/`;
    const tags = Object.keys( app.metadataCache.getTags() ).filter( t => t.startsWith(stemTag) );
    return tags;
}

module.exports = tagLeafFinder
