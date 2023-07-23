const OTHER = "Other";

async function helpfulPrompt(tp, key, tag, header) {
    let knownValues = await tp.user.frontmatterKeyValues(key, tag);
    knownValues.push(OTHER);
    let selectedValue = await tp.system.suggester(knownValues, knownValues, true);
    if (selectedValue === OTHER) {
        selectedValue = await tp.system.prompt("Use which value?", "", true);
    }
    return selectedValue;
}

module.exports = helpfulPrompt;
