// https://gist.github.com/anpigon/35346cfcf853c0d67fb080a1da5c3d2e
// https://dev.to/100lvlmaster/fetch-any-youtube-video-s-metadata-in-2-lines-3343

const notice = (msg) => new Notice(msg, 5000);

const YOUTUBE_URL = "https://m.youtube.com/watch";

const youtubeIdRegExp = /(?:(?:youtube.com\/watch\?v=)|(?:youtu.be\/)|(?:youtube.com\/embed\/))([A-Za-z0-9\_\-]+)/i;

async function getVideoUrlInfo(url) {

  let youtubeMetadata;

  if (!isYoutube(url)) {
    throw new Error("Please enter YouTube URL");
  }

  const [, youtubeId] = youtubeIdRegExp.exec(url);
  youtubeMetadata = await getByYoutubeId(url, youtubeId);

  return {
    ...youtubeMetadata,
    fileName: replaceIllegalFileNameCharactersInString(youtubeMetadata.title),
  };
}

function isYoutube(str) {
  return /^(.*.)?(youtube.com|youtu.be)\/\w+/i.test(str);
}

async function getByYoutubeId(url, id) {
  const outgoing =`https://www.youtube.com/oembed?url=${url}&format=json`;
  const res = await request({
    url: outgoing,
    method: "GET",
    cache: "no-cache",
  });
  if (!res) {
    notice("No results found.");
    throw new Error("No results found.");
  }
  const metaData = JSON.parse(res);
    return metaData;
/*
  const res2 = await request({
    url: `${YOUTUBE_URL}?v=${id}`,
    method: "GET",
    cache: "no-cache",
  });

  if (!res2) {
    notice("No results found.");
    throw new Error("No results found.");
  }
  const regexp = /<meta\s(property="og:|itemprop=")(?<key>(\w|:)+)"\s*content="(?<value>[^"]+)">/gi
  const result = {
    shortUrl: `https://youtu.be/${id}`
  };
  let matched;
  while (matched = regexp.exec(res2)) {
    const { key, value } = matched.groups;
    const newKey = snakeToCamel(key);
    if (newKey === 'videoTag') {
      if (!result[newKey]) result[newKey] = [];
      result[newKey].push(value);
    } else {
      result[newKey] = value?.replace(/\n|\r/g, ' ');
    }
  };
  return {...metaData, result};
  */
}

function replaceIllegalFileNameCharactersInString(string) {
  return string.replace(/[\\,#%&\{\}\/*<>?$\'\":@\[\]\|]*/g, "").replace(/\s+/g, ' ');
}

const snakeToCamel = (str) => {
  if (!/[-_:]/.test(str)) return str;
  return str.toLowerCase().replace(/([-_:][a-z])/g, group =>
    group
      .toUpperCase()
      .replace(/-|_|:/g, '')
  );
}

module.exports = getVideoUrlInfo;
