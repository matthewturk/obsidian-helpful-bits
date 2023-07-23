<%*
let videoUrl = await tp.system.prompt("Video URL?", "", true);
let metadata = await tp.user.videoMetadata(videoUrl);
-%>
---
aliases:  ["<% metadata['author_name'] %> - <% metadata['title'] %>"]
tags:
- #videos/notes
fileClass: video-notes
created: <% tp.date.now() %>
author: "<% metadata['author_name'] %>"
videoTitle: "<% metadata['title'] %>"
video-url: <% videoUrl %>
watched: false
modified: <% tp.date.now() %>
---

# <% metadata['title'] %>

![](<% videoUrl %>)

```timestamp-url
<% videoUrl %>
```

<% tp.file.cursor(0) %>

<% await tp.user.safeRenamer(tp, "reviews/videos/", `${metadata['author_name']} - ${metadata['fileName']} - notes`) %>