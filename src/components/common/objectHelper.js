export const updateObjectInArray = (items, itemID, objPropName, newObjectProps) => {
  return items.map((u) => {
    if (u[objPropName] === itemID) {
      return { ...u, ...newObjectProps };
    }
    return u;
  });
};
