const NameGen = require(app.vault.adapter.basePath + '/assets/template-scripts/namegen.js').default();

/* Does not prompt */
async function generateZeroLevel() {
    const name = new NameGen.Generator("!BsV (the) !i").toString();
    const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
    const occupationRoller = await diceRollerPlugin.getRoller("[[Table 1-3 - Occupations^profession]]");
    const occupationResults = (await occupationRoller.roll()).split(" | ");
    const luckySignRoller = await diceRollerPlugin.getRoller("[[Table 1-2 - Lucky Sign^lucky-sign]]")
    const luckySign = (await luckySignRoller.roll()).split("|")[1]
    const attributeRoller = await diceRollerPlugin.getRoller("3d6");

    const attributes = {
        'strength': await attributeRoller.roll(),
        'agility': await attributeRoller.roll(),
        'stamina': await attributeRoller.roll(),
        'personality': await attributeRoller.roll(),
        'intelligence': await attributeRoller.roll(),
        'luck': await attributeRoller.roll()
    };

    const modifierTable = [undefined, undefined, undefined, -3, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3];

    const hpRoller = await diceRollerPlugin.getRoller("1d4");
    const hp = await hpRoller.roll();

    const moneyRoller = await diceRollerPlugin.getRoller("5d12");
    const money = `${await moneyRoller.roll()} cp`;

    const equipmentRoller = await diceRollerPlugin.getRoller("[[Table 3-4 - Equipment#^equipment]]");
    const equipment = (await equipmentRoller.roll()).split(" | ")[1];

    return {name, attributes, luckySign, occupationResults, hp, money, equipment, modifierTable};
}

module.exports = generateZeroLevel;
