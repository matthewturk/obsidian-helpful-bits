async function safeRenamer(tp, newFolder, newFilename) {
    if (!(await app.vault.exists(newFolder))) {
        await app.vault.createFolder(newFolder);
    }
    var newFullpath = `${newFolder}/${newFilename}.md`;
    var exists = await tp.file.exists(newFullpath);
    if (exists) {
        for (let i =1; i <= 100; i++) {
            newFullpath = `${newFolder}/${newFilename} - ${i}.md`;
            exists = await tp.file.exists(newFullpath);
            if (!exists) break;
        }
    }
    // We now have a newFullpath that probably includes the .md extension.
    // But, we don't want obsidian to use that.
    if (newFullpath.endsWith(".md")) {
        newFullpath = newFullpath.slice(0, -3);
    }
    return tp.file.move(newFullpath);
}

module.exports = safeRenamer;
