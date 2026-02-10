export {};

// Concept 37: Branding (nominal-like types)

type UserId = string & { __brand: "UserId" };
function toUserId(id: string): UserId {
  return id as UserId;
}
const uid = toUserId("u1");
