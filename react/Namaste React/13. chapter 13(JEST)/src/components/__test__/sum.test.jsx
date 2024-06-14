import { sum } from "../sum"


test("test", ()=>{
    const result = sum(4,5);

    // Assertion
    expect(result).toBe(9);
})