// tests written by chatgpt
import { genericSort, sortByKey, SortData } from "./genericSort";

describe("genericSort", () => {
  it("sorts an array of objects by a given key", () => {
    const arr = [
      { name: "Charlie", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const sortData: SortData<{ name: string; age: number }> = { key: "name" };
    const sortedArr = genericSort(arr, sortData);
    expect(sortedArr).toEqual([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 25 },
    ]);
  });

  it("sorts an array of objects in descending order", () => {
    const arr = [
      { name: "Charlie", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const sortData: SortData<{ name: string; age: number }> = {
      key: "age",
      isDescending: true,
    };
    const sortedArr = genericSort(arr, sortData);
    expect(sortedArr).toEqual([
      { name: "Alice", age: 30 },
      { name: "Charlie", age: 25 },
      { name: "Bob", age: 20 },
    ]);
  });
});

describe("sortByKey", () => {
  it("sorts objects by a given key in ascending order", () => {
    const object1 = { name: "Alice", age: 30 };
    const object2 = { name: "Bob", age: 20 };
    const key = "name";
    const isDescending = false;
    const result = sortByKey({ object1, object2, key, isDescending });
    expect(result).toBe(-1);
  });

  it("sorts objects by a given key in descending order", () => {
    const object1 = { name: "Charlie", age: 25 };
    const object2 = { name: "Bob", age: 30 };
    const key = "age";
    const isDescending = true;
    const result = sortByKey({ object1, object2, key, isDescending });
    expect(result).toBe(1);
  });

  it("returns 0 if objects are equal by the key", () => {
    const object1 = { name: "Charlie", age: 25 };
    const object2 = { name: "Charlie", age: 25 };
    const key = "name";
    const isDescending = true;
    const result = sortByKey({ object1, object2, key, isDescending });
    expect(result).toBe(-0);
  });
});
