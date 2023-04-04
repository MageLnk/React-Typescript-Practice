import { getImagen } from "./11-async-await";
describe("Given getImagen function", () => {
  test("It should return a url", async () => {
    // Arrange
    const url = await getImagen();
    expect(typeof url).toBe("string");
    console.log("SADAFSD", url);
    // Act
    // Assert
  });
});
