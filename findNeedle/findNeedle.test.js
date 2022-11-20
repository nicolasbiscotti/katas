const findNeedle = require("./findNeedle");

describe("find Needle", () => {
  it("should retuen -1 when needle is larger than haystack", () => {
    expect(findNeedle("puntual").inHaystack("pink")).toEqual(-1);
  });

  it("should retuen -1 when needle is equals length than haystack but not the same string", () => {
    expect(findNeedle("puntual").inHaystack("puntial")).toEqual(-1);
  });

  it("should return 0 when bouth string are equals", () => {
    expect(findNeedle("hello").inHaystack("hello")).toEqual(0);
  });

  it("should return 0 when the needle is shorter at the beginning", () => {
    expect(findNeedle("weo").inHaystack("weon-dylan")).toEqual(0);
  });

  it("should return 1 when search 'neo' in 'oneolis'", () => {
    expect(findNeedle("neo").inHaystack("oneolis")).toEqual(1);
  });
  it("should return 5 when search 'miuw' in 'fichimiuw'", () => {
    expect(findNeedle("miuw").inHaystack("fichimiuw")).toEqual(5);
  });
});
