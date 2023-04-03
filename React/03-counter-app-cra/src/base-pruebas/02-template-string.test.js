import { getSaludo } from "./02-template-string.js";

describe("Given getSaludo function", () => {
  test('It should return "Hola Claudio"', () => {
    // Arrange
    const name = "Claudio";
    // Act
    const message = getSaludo(name);

    // Assert
    expect(message).toBe(`Hola ${name}`);
  });
});
