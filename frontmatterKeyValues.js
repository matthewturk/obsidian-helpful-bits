// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

async function frontmatterKeyValues(key, selectionTag) {
    const dv = app.plugins.plugins["dataview"].api;
    if (!selectionTag.startsWith("#")) selectionTag = `#${selectionTag}`;
    keyValues = dv.pages(selectionTag).filter( p => p[key] ).map( p => p[key] ).filter(onlyUnique);
    return keyValues.array();
}

module.exports = frontmatterKeyValues;
