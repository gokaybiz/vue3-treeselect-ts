export function find(
  arr: any[],
  predicate: { call: (arg0: any, arg1: any, arg2: number, arg3: any[]) => any },
  ctx?: any
) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }
  return undefined;
}
