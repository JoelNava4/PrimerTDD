import {generarFizzBuzz} from "./FizzBuzz.js"

describe("FizzBuzz", () => {
    it("genrar el numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("genrar el numero para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("genrar Fizz para el numero 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
});