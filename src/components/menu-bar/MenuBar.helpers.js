import update from 'immutability-helper';

export const MIN_PRICE = 0;
export const MAX_PRICE = 10000;

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

function removeIndexFromArray(arr, index) {
  const newArr = update(arr, {
    $splice: [[index, 1]],
  });

  return newArr;
}

function addToArray(arr, obj) {
  return arr.concat(obj);
}

export function toggleFilter(selectedFilters, filter) {
  const selectedIndex = selectedFilters.findIndex(
    (selectedFilter) => selectedFilter.value === filter.value
  );

  if (selectedIndex > -1) {
    const newSelectedFilters = removeIndexFromArray(
      selectedFilters,
      selectedIndex
    );
    return newSelectedFilters;
  }

  return addToArray(selectedFilters, filter);
}
