function slugify(itemName) {
    let slugCandidate = itemName.toLowerCase()
        .replace(/^a-z0-9 -￼/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/:/g, '-'); // replace colons with dashes
    return slugCandidate;
}
module.exports = slugify;
