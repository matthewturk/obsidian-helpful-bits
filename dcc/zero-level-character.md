<%*
const character = await tp.user.zeroLevel();
const { modifierTable, attributes } = character;

const playerName = await tp.system.prompt("Who is playing this character?", "Unknown");
const name = await tp.system.prompt("What is this character's name?", character.name);
const alignment = await tp.system.suggester(["Lawful", "Neutral", "Chaotic"], ["Lawful", "Neutral", "Chaotic"])

-%>
---
aliases:  []
tags:
 - #characters/dcc
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
rpg: DCC
type: character
name: <% name %>
player: <% playerName %>
---

# Zero-level-character

```statblock
layout: DCC
name: <% name %>
player: true
playerName: <% playerName %>
alignment: <% alignment %>
hit_dice: 1d4
hp: <% character.hp %>
stats: 
 - <% attributes['strength'] %>
 - <% attributes['agility'] %>
 - <% attributes['stamina'] %>
 - <% attributes['personality'] %>
 - <% attributes['intelligence'] %>
 - <% attributes['luck'] %>
languages:
 - Common
occupation: <% character.occupationResults[1] %>
equipment: "
 - <% character.occupationResults[2]%>\n
 - <% character.money %>\n
 - <% character.equipment %>\n"
tradegoods: "<%character.occupationResults[3]%>"
action_value: 1
action_die: 1d20
lucky_sign: "<% character.luckySign %> (<% modifierTable[attributes['luck']] %>)"
luck_modifier: <% modifierTable[attributes['luck']] %>
original_luck: <% attributes['luck'] %>
saving_throws:
  fortitude: <% modifierTable[attributes['stamina']] %>
  reflex: <% modifierTable[attributes['agility']] %>
  willpower: <% modifierTable[attributes['personality']] %>
critical_die:
  table: I
  formula: 1d4
```

<% await tp.user.safeRenamer(tp, "DCC/characters", `${playerName} - ${name}`) %>