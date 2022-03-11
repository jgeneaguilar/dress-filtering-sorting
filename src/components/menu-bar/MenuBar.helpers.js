export function getOptions(arr, key) {
  const dict = {};

  const options = arr.reduce((acc, curr) => {
    const value = curr[key];

    if (dict[value] === undefined) {
      acc.push({
        name: value,
        type: key,
        value,
      });

      dict[value] = value;
    }

    return acc;
  }, []);

  const ascendingFn = (a, b) => (a.value < b.value ? -1 : 1);
  return options.sort(ascendingFn);
}
