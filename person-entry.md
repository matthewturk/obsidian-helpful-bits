<%*
let selectedText = tp.file.selection()
let personName = await tp.system.prompt("Person's name?", selectedText, true);
-%>
---
title: <% personName %>
organization:
location:
persontitle:
email:
website:
pronouns:
aliases: ["<% personName %>"]
tags:
 - person
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
fileClass: person-entry
---

# <% personName %>
<% await tp.file.move("/people/" + personName) %>

```dataviewjs
dv.paragraph(await dv.io.load("templates/person-entry-header.md"))
```

## Notes
- ...

## Meetings

```dataview
TABLE created as Created
FROM #meeting where any(
    map(this.aliases, (a) => contains(attendees, a))
    ) 
SORT created DESC
```
