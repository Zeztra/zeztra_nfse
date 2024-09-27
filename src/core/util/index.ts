export const RemoveSpecialChar = (value: string, limited?: boolean): string => {
  if (value && !limited) {
    return value
      .toString()
      .replace(/[^\w\s]+/gi, '')
      .replace(/[\r\n\t]+/g, '');
  }
  if (value && limited) {
    const dataPattern =
      /[\r\t\n`~!@#$%^&*()_|+\-–=═?;:'",.<>¨¬£³²¹°´ªº/\\[\]]/gi;

    return value
      .toString()
      .replaceAll(dataPattern, '')
      .replace(/[^\x00-\x7F]/g, '');
  }
  return value;
};
