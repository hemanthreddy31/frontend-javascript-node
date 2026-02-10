export {};

// Concept 10: Type guards and type predicates

type Fish = { swim(): void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// Narrowing with "in"
function hasSwim(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim();
  }
}
