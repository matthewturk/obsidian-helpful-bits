<%*
const partyName = await tp.system.prompt("What should we call this party?", `funnel - ${tp.date.now()}`);
const numCharacters = await tp.system.prompt("How many should we generate per player?", 4);
const playerNames = (await tp.system.prompt("Enter the player names, separated by newlines.", "", true, true)).split("\n").filter(_ => _.length != 0);
const playerCharacters = [];
const playerParties = [];
-%>
---
aliases:  ["Party - <%partyName %>"]
tags:
 - #characters/dcc
 - #party/dcc
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
rpg: DCC
type: party
name: <% partyName %>
players: <%* for (playerName of playerNames) { %>
  - <% playerName %> <%* } %>
cssclass: wide-page
---

# Party - <% partyName %>

<%*for (playerName of playerNames) { -%>
## <%playerName %>

> [!columns|2 no-icon no-title]
<%*
let initiativeModifier = -Infinity;
for (i = 0; i < numCharacters; i++) {
const character = await tp.user.zeroLevel();
const { name, modifierTable, attributes } = character;
const modifier = modifierTable[attributes['agility']];
playerCharacters.push({
 player: true,
 name: name,
 modifier: modifier,
 ac: 10,
 hp: character.hp,
 level: 0
});
initiativeModifier = Math.max(initiativeModifier, modifier);
-%>
> ```statblock
> layout: DCC
> name: <% name %>
> player: true
> playerName: <% playerName %>
> alignment: Unknown
> hp: <% character.hp %>
> modifier: <% modifierTable[attributes['agility']] %>
> stats: 
>  - <% attributes['strength'] %>
>  - <% attributes['agility'] %>
>  - <% attributes['stamina'] %>
>  - <% attributes['personality'] %>
>  - <% attributes['intelligence'] %>
>  - <% attributes['luck'] %>
> languages:
>  - Common
> occupation: <% character.occupationResults[1] %>
> equipment: "
>  - <% character.occupationResults[2]%>\n
>  - <% character.money %>\n
>  - <% character.equipment %>\n"
> tradegoods: "<%character.occupationResults[3]%>"
> action_value: 1
> action_die: 1d20
> lucky_sign: "<% character.luckySign %> (<% modifierTable[attributes['luck']] %>)"
> luck_modifier: <% modifierTable[attributes['luck']] %>
> original_luck: <% attributes['luck'] %>
> saving_throws:
>   fortitude: <% modifierTable[attributes['stamina']] %>
>   reflex: <% modifierTable[attributes['agility']] %>
>   willpower: <% modifierTable[attributes['personality']] %>
> critical_die:
>   table: I
>   formula: 1d4
> ```
>
<%* }
playerParties.push({
 player: true,
 name: `${playerName} - ${partyName}`,
 modifier: initiativeModifier,
 ac: 1,
 hp: 1,
 level: 0
});
%>

<%* } %>
<% await tp.user.safeRenamer(tp, "DCC/characters", `${partyName}`) %>
<%*
const it = app.plugins.getPlugin("initiative-tracker");
const party = {name: partyName, players: []};
for (const charSet of playerParties){
	it.savePlayer(charSet);
	party.players.push(charSet.name);
}
it.data.parties.push(party);
it.data.defaultParty = partyName;
it.saveSettings();
-%>