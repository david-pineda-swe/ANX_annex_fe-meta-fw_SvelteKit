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

export const groupItemsEvenly = (items: Array<unknown>, groupCount = 2) => {
  if (items.length === 0) {
    return [];
  }

  const itemsPerGroup = Math.floor(items.length / groupCount); // Calculate the base number of items per group
  const remainder = items.length % groupCount; // Calculate the remainder

  const groups = Array.from({ length: groupCount }, (_, index) => {
    const extraItemCount = index < remainder ? 1 : 0; // Distribute the remainder
    const startIndex = itemsPerGroup * index + Math.min(index, remainder); // Calculate the start index for this group
    const endIndex = startIndex + itemsPerGroup + extraItemCount; // Calculate the end index for this group
    return items.slice(startIndex, endIndex);
  });

  return groups;
};