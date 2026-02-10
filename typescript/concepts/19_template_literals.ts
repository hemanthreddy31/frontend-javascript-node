export {};

// Concept 19: Template literal types

type EventName = "click" | "focus";
type OnEvent = `on${Capitalize<EventName>}`; // "onClick" | "onFocus"

type Variant = "primary" | "secondary";
type ButtonClass = `btn-${Variant}`; // "btn-primary" | "btn-secondary"
