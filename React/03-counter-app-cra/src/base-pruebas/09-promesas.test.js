import { getHeroeByIdAsync } from "./09-promesas";

describe("Given getHeroeByIdAsync function", () => {
  test("It should return an hero", (done) => {
    // Arrange
    const idHero = 1;

    // Act & Assert
    getHeroeByIdAsync(idHero).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("It should return an error if heroe doesn't exist", (done) => {
    // Arrange
    const idHero = 100;

    // Act & Assert
    getHeroeByIdAsync(idHero).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${idHero}`);

      done();
    });
  });
});
