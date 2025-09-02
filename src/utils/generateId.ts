const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "gray",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "silver",
  "gold",
  "beige",
  "purple",
  "turquoise",
];

export const generateId = (prefix = "") => {
  const randomKey = colors[Math.floor(Math.random() * colors.length)];
  const timestamp = Date.now().toString(36).slice(-5);

  return [prefix, randomKey, timestamp].filter(Boolean).join("_");
};
