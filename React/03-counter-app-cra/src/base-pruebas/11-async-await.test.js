import { getImagen } from "./11-async-await";
describe("Given getImagen function", () => {
  test("It should return a url", async () => {
    // Arrange
    const url = await getImagen();
    console.log("url", url);
    // Act
    // Assert
  });
});
