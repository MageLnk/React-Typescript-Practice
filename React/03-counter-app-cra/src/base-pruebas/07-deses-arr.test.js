import { retornaArreglo } from "./07-deses-arr";

describe("Given retornaArreglo function", () => {
  test("It should return an array", () => {
    // Arrange
    const [letters, numbers] = retornaArreglo();
    // Act & Assert
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Este recibe cualquier tipo de string
    expect(letters).toEqual(expect.any(String));
  });
});
