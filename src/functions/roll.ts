export const roll = (dice: number) => {
  let result = 0;
  for (let i = 0; i < dice; i++) {
    result += Math.floor(Math.random() * 6);
  }
  return result;
};
