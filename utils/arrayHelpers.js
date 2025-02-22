export const getEvenNumbers = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.filter(num => num % 2 === 0);
  };