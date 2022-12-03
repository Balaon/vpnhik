export const isObject = (object: any): object is Record<any, any> =>
  typeof object === 'object' && object !== null && object.toString() === '[object Object]';
