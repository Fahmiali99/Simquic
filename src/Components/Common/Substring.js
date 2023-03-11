export const Substring = (text) => {
  if (!text) {
    return " ";
  }

  const maxLength = 147;
  let subst = text.substring(0, 150);

  if (subst.length > maxLength) {
    subst = subst.substring(0, maxLength) + "...";
  }

  return subst;
};
