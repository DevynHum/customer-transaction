import { calcPoints } from "../utility/utils";

describe("Calculate points of transactions", () => {
  test("Testing calculations", () => {
    expect(calcPoints(120)).toBe(90);
    expect(calcPoints(150)).toBe(150);
    expect(calcPoints(200)).toBe(250);
  });
});
