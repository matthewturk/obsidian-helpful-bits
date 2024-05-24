function slugify(itemName) {
    let slugCandidate = itemName.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Corrected: remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/:/g, '-') // replace colons with dashes
        .replace(/\.[^\.]*$/, ''); // remove the last fullstop, if any
    return slugCandidate;
}
module.exports = slugify;


// Thanks to my intuition and ChatGPT
