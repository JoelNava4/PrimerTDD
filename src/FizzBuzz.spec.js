import {generarFizzBuzz} from "./FizzBuzz.js"

describe("FizzBuzz", () => {
    it("genrar el numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("genrar el numero para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
});