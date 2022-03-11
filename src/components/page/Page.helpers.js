export function sortDressesByPrice(dresses, order) {
  if (order === 'asc') {
    return dresses.sort((a, b) => a.price - b.price);
  }

  return dresses.sort((a, b) => b.price - a.price);
}
