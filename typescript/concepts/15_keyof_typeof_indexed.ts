export {};

// Concept 15: keyof, typeof, and indexed access

const config = { host: "localhost", port: 8080 };
type Config = typeof config;
type ConfigKey = keyof Config; // "host" | "port"
type PortType = Config["port"]; // number

function getConfigValue<K extends keyof Config>(key: K): Config[K] {
  return config[key];
}
const port = getConfigValue("port");
