// This is largely taken from the MIT-licensed https://github.com/chauff/paper-note-filler/blob/master/main.ts

const arXivRestAPI = "https://export.arxiv.org/api/query?id_list=";

function getIdentifierFromUrl(url) {
    //if url ends in / remove it
    if (url.endsWith("/"))
        url = url.slice(0, -1);
    return url.split("/").slice(-1)[0];
}

function extractFromArxiv(url) {
    let id = getIdentifierFromUrl(url);

    return fetch(arXivRestAPI + id)
        .then((response) => response.text())
        .then(async (data) => {
            //parse the XML
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, "text/xml");

            let title =
                xmlDoc.getElementsByTagName("title")[1].textContent;
            let abstract =
                xmlDoc.getElementsByTagName("summary")[0]
                    .textContent;
            let authors = xmlDoc.getElementsByTagName("author");
            let authorString = "";
            for (let i = 0; i < authors.length; i++) {
                if (i > 0) {
                    authorString += ", ";
                }
                authorString +=
                    authors[i].getElementsByTagName("name")[0]
                        .textContent;
            }
            let date =
                xmlDoc.getElementsByTagName("published")[0]
                    .textContent;
            if (date) date = date.split("T")[0]; //make the date human-friendly

            if (title == null) title = "undefined";
            
            let linkUrls = xmlDoc.getElementsByTagName("link");
            let pdfUrl = "";
            for (let i = 0; i < linkUrls.length; i++) {
                if (linkUrls[i].getAttribute("title") == "pdf") {
                    pdfUrl = linkUrls[i].getAttribute("href");
                    if (!pdfUrl.endsWith(".pdf")) pdfUrl = pdfUrl + ".pdf";
                }
            }
            return {title, date, authors, authorString, abstract, id, pdfUrl};
    });
}

module.exports = extractFromArxiv;
