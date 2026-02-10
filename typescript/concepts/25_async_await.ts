export {};

// Concept 25: async/await and Promise types

async function fetchUser(id: string): Promise<{ id: string; name: string }> {
  return { id, name: "User" };
}

async function run() {
  const user = await fetchUser("1");
  return user.name;
}
