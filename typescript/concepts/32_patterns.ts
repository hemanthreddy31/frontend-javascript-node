export {};

// Concept 32: as const patterns

const routes = {
  home: "/",
  user: "/users/:id",
} as const;

type RouteName = keyof typeof routes; // "home" | "user"
type RoutePath = typeof routes[RouteName];
