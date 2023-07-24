<%*
let projectName = await tp.user.helpfulPrompt(tp, "project", "#projects", "Project Name?");
let ideaName = await tp.system.prompt("Idea name?", "", true);
let slugName = tp.user.slugger(projectName);
-%>
---
aliases:  []
cssclass: quickidea
tags:
 - pkm/quickidea
 - pkm/process
 - projects/<% projectName %>
Date: <% tp.date.now() %>
created: <% tp.date.now() %>
title: <% tp.date.now() %> - Quick Idea - <% ideaName %>
modified: <% tp.date.now() %>
---

# <% tp.date.now() %> - Quick Idea - <% ideaName %>
<% await tp.user.safeRenamer(tp, "projects/" + projectName + "/quickideas", tp.date.now() + " - Quick Idea - " + ideaName) %>
<% await tp.file.cursor() %>