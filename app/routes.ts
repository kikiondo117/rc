import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("events", "routes/events.tsx"),
    route("upload", "routes/private/upload.tsx"),
    route("podcasts", "routes/podcasts.tsx"),
  ]),
] satisfies RouteConfig;
