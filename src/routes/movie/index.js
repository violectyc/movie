export default {
  path: "/movie",
  component: () => import("@/views/Movie"),
  children: [
    {
      path: "/movie",
      redirect: "/movie/nowPlaying"
    },
    {
      path: "nowPlaying",
      component: () => import("@/components/NowPlaying")
    }
  ]
};
