export function removeFromArray<T>(arr: Array<T>, elem: T) {
  const idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}
