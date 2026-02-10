export {};

// Concept 21: Namespaces (legacy internal modules)
// Prefer ES modules, but namespaces still exist in some codebases.

namespace LegacyNamespace {
  export const version = "1.0";
  export function hello() {
    return "hi";
  }
}
