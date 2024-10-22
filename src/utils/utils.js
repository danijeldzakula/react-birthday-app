/**
 * Creates a promise that resolves after a specified delay.
 * @param delay The delay in milliseconds before the promise resolves. Default is 700ms.
 * @returns A promise that resolves after the specified delay.
 */
export const wait = (delay = 700) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
