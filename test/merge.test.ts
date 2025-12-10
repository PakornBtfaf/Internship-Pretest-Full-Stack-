import { merge } from "../src/merge";

describe("Merge three sorted collections", () => {
  test("should merge correctly without using sort()", () => {
    const c1 = [1, 4, 8];
    const c2 = [2, 5, 9];
    const c3 = [15, 10, 3]; 

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 3, 4, 5, 8, 9, 10, 15]);
  });

  test("handles empty arrays", () => {
    expect(merge([], [1, 3], [5, 4])).toEqual([1, 3, 4, 5]);
  });

  test("handles all empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });
});
