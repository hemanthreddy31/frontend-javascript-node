export {};

// Concept 42: Optional chaining in index access

type Data = { users?: { name: string }[] };
const data: Data = {};
const name = data.users?.[0]?.name;
