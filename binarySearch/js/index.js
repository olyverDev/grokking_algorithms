
const binarySearch = (value, array = []) => {
  if (array.length) {
      if (array.length === 1) {
        return array[0] === value ? 0 : null;
      }

      let start = 0;
      let end = array.length - 1;
      let middleIdx, middleValue;

      while (start <= end) {
        middleIdx = Math.round((start + end) / 2);
        middleValue = array[middleIdx];

        if (middleValue === value) return middleIdx;

        if (middleValue < value) {
          start = middleIdx + 1;
        } else {
          end = middleIdx - 1;
        }
      }
  }

  return null;
}
