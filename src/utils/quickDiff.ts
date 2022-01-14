export function quickDiff(arrA: Array<string | number>, arrB: Array<string | number>) {
  if (arrA.length !== arrB.length) return true;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }

  return false;
}
