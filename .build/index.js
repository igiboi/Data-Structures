function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm there is no string";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}
reverse("Hi my name is Luigi");
//# sourceMappingURL=index.js.map
