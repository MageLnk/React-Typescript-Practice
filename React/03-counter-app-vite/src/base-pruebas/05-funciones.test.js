import { getUser, getUsuarioActivo } from "./05-funciones";

describe("Given getUser function", () => {
  test("It should return an object the function getUser", () => {
    // Arrange
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    // Act
    const user = getUser();

    // Assert
    expect(testUser).toEqual(user);
  });

  test("It should return an object the function getUsuarioActivo", () => {
    // Arrange
    const name = "Resorte";
    const testUser = {
      uid: "ABC567",
      username: name,
    };
    // Act
    const user = getUsuarioActivo(name);

    // Assert
    expect(testUser).toEqual(user);
  });
});
