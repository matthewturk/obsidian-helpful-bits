<%*
let projectName = await tp.user.helpfulPrompt(tp, "project", "#projects", "Project Name?");
let slugName = tp.user.slugger(projectName);
-%>
---
fileClass: meeting-notes
aliases: ["<% projectName %>-meeting-<% tp.date.now() %>"]
tags:
 - notes
 - meeting
 - projects/<% projectName %>
project: <% projectName %>
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
date: <% tp.date.now() %>
attendees:
 - Matt Turk
 - ...
title: Notes - <% projectName %> - <% tp.date.now() %>
---

# Notes - <% projectName %> - <% tp.date.now() %>

## Agenda and Notes

1. start
2. ...

## Action Items

Use the metadata `assigned` like `(assigned:: Matt Turk)` in these.

- [ ] 

## Other
<% await tp.user.safeRenamer(tp, "projects/" + projectName, slugName + " - notes - " + tp.date.now()) %>
