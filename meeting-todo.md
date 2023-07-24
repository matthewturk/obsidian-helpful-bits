<%*
const attendees = (tp.frontmatter['attendees'] || []).slice(0);
const personName = await tp.user.otherSelection(tp, "Assigned to?", attendees)
const task = await tp.system.prompt("Task?", await tp.file.selection(), true);
}
-%>
(assigned:: <% personName %>) <% task %>