type IObject = { [key: string]: string };
//По возрастанию
export function sortBy(key: string, cb: (a?: IObject, b?: IObject) => number) {
  if (!cb) cb = () => 0;
  return (a?: IObject, b?: IObject) =>
    a && b && a[key] > b[key] ? 1 : a && b && b[key] > a[key] ? -1 : cb(a, b);
}
//По убыванию
export function sortByDesc(
  key: string,
  cb: (a?: IObject, b?: IObject) => number
) {
  if (!cb) cb = () => 0;
  return (b?: IObject, a?: IObject) =>
  a && b &&   a[key] > b[key] ? 1 :  a && b && b[key] > a[key] ? -1 : cb(b, a);
}

export function orderBy(keys: string[], orders:string[]) {
  let cb = () => 0;
  keys.reverse();
  orders.reverse();
  for (const [i, key] of keys.entries()) {
    const order = orders[i];
    if (order === 'asc') cb = sortBy(key, cb);
    else if (order === 'desc') cb = sortByDesc(key, cb);
  }
  return cb;
}
// Может все таки lodash ?
