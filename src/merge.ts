export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {

  const result: number[] = [];

  let i = 0;                        // pointer for collection_1
  let j = 0;                        // pointer for collection_2
  let k = collection_3.length - 1;  // pointer for reversed collection_3 (max → min)

  // ดึงค่าน้อยที่สุดจาก 3 collection ทีละตัว
  while (i < collection_1.length || j < collection_2.length || k >= 0) {

    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j < collection_2.length ? collection_2[j] : Infinity;
    const c = k >= 0 ? collection_3[k] : Infinity;

    // เลือกตัวที่น้อยที่สุด
    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k--;
    }
  }

  return result;
}
