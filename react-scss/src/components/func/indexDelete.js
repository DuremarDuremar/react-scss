export const indexDelete = (array, index) => {
  array.slice(0, index).concat(array.slice(index + 1));
};
