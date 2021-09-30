// import CADiscover from '@/pages/discover';
// import CAFriend from '@/pages/discover';
// import CAMine from '@/pages/mine';

// import Album from '@/pages/discover/child/album';
// import Artist from '@/pages/discover/child/artist';
// import Djradio from '@/pages/discover/child/djradio';
// import Ranking from '@/pages/discover/child/ranking';
// import Recommend from '@/pages/discover/child/recommend';
// import Songs from '@/pages/discover/child/songs';

// import songDetail from '@/pages/player/song-detail';
import React from "react";
import { Redirect } from "react-router-dom";
const CADiscover = React.lazy(() => import("@/pages/discover"));
const CAFriend = React.lazy(() => import("@/pages/discover"));
const CAMine = React.lazy(() => import("@/pages/mine"));

const Album = React.lazy(() => import("@/pages/discover/child/album"));
const Artist = React.lazy(() => import("@/pages/discover/child/artist"));
const Djradio = React.lazy(() => import("@/pages/discover/child/djradio"));
const Ranking = React.lazy(() => import("@/pages/discover/child/ranking"));
const Recommend = React.lazy(() => import("@/pages/discover/child/recommend"));
const Songs = React.lazy(() => import("@/pages/discover/child/songs"));

const songDetail = React.lazy(() => import("@/pages/player/song-detail"));

const Search = React.lazy(() => import("@/pages/search/song-search"));
const searchList = React.lazy(() => import("@/pages/search/child/search-list"));
const videoList = React.lazy(() => import("@/pages/search/child/video-list"));
const singerList = React.lazy(() => import("@/pages/search/child/singer-list"));
const userList = React.lazy(() => import("@/pages/search/child/user-list"));
const albumList = React.lazy(() => import("@/pages/search/child/album-list"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: CADiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/songDetail",
        component: songDetail,
      },
    ],
  },
  {
    path: "/mine",
    component: CAMine,
  },
  {
    path: "/friend",
    component: CAFriend,
  },
  {
    path: "/search",
    component: Search,
    routes: [
      {
        path: "/search",
        exact: true,
        render: () => <Redirect to="/search/searchList" />,
      },
      {
        path: "/search/searchList",
        component: searchList,
      },
      {
        path: "/search/videoList",
        component:videoList,
      },
      {
        path: "/search/singerList",
        component: singerList,
      },
      {
        path: "/search/userList",
        component: userList,
      },
      {
        path: "/search/albumList",
        component: albumList,
      },
    ],
  },
];
export default routes;
