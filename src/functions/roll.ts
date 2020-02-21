export const roll = (poolSize: number) => {
  let result = 0;
  for (let i = 0; i < poolSize; i++) {
    result += Math.floor(Math.random() * 6);
  }
  return result;
};
