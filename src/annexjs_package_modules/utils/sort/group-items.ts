export const groupItemsByCount = (items: Array<unknown>, itemsPerGroup: number) => {
  const groups = items.reduce((groups: Array<unknown>, item, index) => {
    if (index % itemsPerGroup === 0) {
      // Add a new group
      groups.push([item]);
    } else {
      // Add the item to the current group
      const lastGroupIndex: number = groups.length - 1;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      groups[lastGroupIndex].push(item);
    }
    return groups;
  }, []);

  return groups;
};
