export const formatNameToTwoWords = (name: string) => {
  const nameArray = name.split(" ");
  return nameArray.length === 1
    ? nameArray[0]
    : `${nameArray[0]} ${nameArray[nameArray.length - 1]}`;
};
