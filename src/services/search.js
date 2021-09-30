import request from "./request";

export function getSearchSong(keywords,type=1,limit=20) {
  return request({
    url: "/cloudsearch",
    params: {
      keywords,
      type,
      limit,
    },
  });
}
