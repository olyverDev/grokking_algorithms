
const qsort = (array = []) => {
  if (array.length < 2) return array;

  const pillar = array[0];
  const left = array.slice(1).filter(el => el <= pillar);
  const right = array.filter(el => el > pillar);

  return [...qsort(left), pillar, ...qsort(right)];
}

console.log(qsort([20, 6, 6, 1, 3, 5])); // [1, 3, 5, 6, 6, 20]
