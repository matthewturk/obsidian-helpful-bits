---
aliases:  []
tags: ["uncategorized"]
created: 2024-02-14
modified: 2024-02-29
---

# Meeting-notes

```meta-bind
INPUT[listSuggester(optionQuery(#person), useLinks(false)):attendees]
```

```meta-bind-js-view

{attendees} as attendees

---

const attendeesStr = context.bound.attendees.map(x => `option(${x})`).join(", ");

const mightNeed = context.bound.attendees.filter( a => !app.metadataCache.getFirstLinkpathDest(a, "/people"))

const str = `\`INPUT[inlineSelect(${attendeesStr}):memory^selected]\`\n\n${mightNeed}`;

return engine.markdown.create(str);

```

`BUTTON[add-todo, create-person-entry]`

```meta-bind-button
style: primary
hidden: true
id: create-person-entry
label: Create Person Entry
actions:
  - type: templaterCreateNote
    templateFile: "templates/person-entry.md"
    folderPath: people
    fileName: "temp-entry"
    openNote: false
```
```meta-bind-button
label: Add Todo
hidden: true
class: ""
tooltip: ""
id: add-todo
style: primary
actions:
  - type: command
    command: quickadd:choice:567cf54d-9450-4bdb-aaaa-14ff398423e8

```

```dataview
TASK
FROM #meeting 
WHERE project = this.project and assigned and !completed and text != ""
SORT project
GROUP by assigned
```

```meta-bind-js-view

{memory^selected} as selected

---

//return engine.markdown.create(`![[${context.bound.selected}]]`)

```