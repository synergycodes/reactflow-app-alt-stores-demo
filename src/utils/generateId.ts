const animals = [
  "dog",
  "cat",
  "horse",
  "cow",
  "sheep",
  "goat",
  "pig",
  "chicken",
  "duck",
  "goose",
  "deer",
  "boar",
  "fox",
  "hare",
  "mouse",
  "rat",
  "wolf",
  "bear",
  "eagle",
  "falcon",
];

export const generateId = () => {
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const timestamp = Date.now().toString(36);

  return `${randomAnimal}_${timestamp}`;
};
