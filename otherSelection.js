const OTHER = "Other";

async function otherSelection(tp, header, options) {
    options.push(OTHER);
    let selectedValue = await tp.system.suggester(options, options, true);
    if (selectedValue === OTHER) {
        selectedValue = await tp.system.prompt("Use which value?", "", true);
    }
    return selectedValue;
}

module.exports = otherSelection;
