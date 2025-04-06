export const isEqual = (object1: any, object2: any): boolean => {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
