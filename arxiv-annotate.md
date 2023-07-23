<%*
let arxivUrl = await tp.system.prompt("arxiv url?", "", true);
let arxivData = await tp.user.arxivGrabber(arxivUrl);
let slugName = tp.user.slugger(arxivData['title'])
console.log(arxivData['authors']);
console.log('reviews/arxiv-papers/' + arxivData['id'] + ' - ' + slugName);
-%>
---
aliases: ["<% arxivData['title'] %>", "<% arxivData['id'] %>"]
type: pdf
fileClass: pdf-annotation
tags:
- pdf
- notes 
- paper /arxiv
created: <% tp.date.now() %>
modified: <% tp.date.now() %>
paper-attributes:
  title: "<% arxivData['title'] %>"
  URL: <% arxivUrl %>
  id: <% arxivData['id'] %>
  authors: <% Array.from(arxivData['authors']).reduce((a, c) => a + "\n    - \"" + c.getElementsByTagName("name")[0].textContent + "\"", "") %>
  authorString: <% arxivData['authorString'] %>
  date: <% arxivData['date'] %>
annotation-target: "<% arxivData['pdfUrl'] %>"
---

**Title:** <% arxivData['title'] %>
**URL:** <% arxivUrl %>
**id:** <% arxivData['id'] %>
**authors:** <% arxivData['authorString'] %>
**date:** <% arxivData['date'] %>
**Abstract:**

> <% arxivData['abstract'] %>

<% await tp.file.move('reviews/arxiv-papers/' + arxivData['id'] + ' - ' + slugName) %>