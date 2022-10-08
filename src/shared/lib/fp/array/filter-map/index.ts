export const filterMap = <T extends any[], Map extends (item: T[number]) => any>(
  array: T,
  filter: (item: T[number]) => boolean,
  map: Map,
): Array<ReturnType<Map>> => {
  const result: Array<ReturnType<Map>> = [];
  for (const item of array) if (filter(item)) result.push(map(item));

  return result;
};
