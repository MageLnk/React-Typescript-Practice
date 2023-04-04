import { render } from "@testing-library/react";
import FirstApp from "./FirstApp";
describe("Given <FirstApp /> component", () => {
  test("It should exist", () => {
    // Arrange
    // Act
    // Assert
  });
  test("It should match with the snapshot", () => {
    // Arrange
    const title = "Hola, soy Gokú";
    const { container } = render(<FirstApp title={title} />);

    // Act

    // Assert
    expect(container).toMatchSnapshot();
  });

  test("It should check for title exist", () => {
    // Arrange
    const title = "Hola, soy Gokú";

    // Act
    const { getByText } = render(<FirstApp title={title} />);

    // Assert
    expect(getByText(title)).toBeTruthy();
  });

  test("It should check for id 'test-title' for title", () => {
    // Arrange
    const title = "Hola, soy Gokú";

    // Act
    const { getByTestId } = render(<FirstApp title={title} />);

    // Assert
    expect(getByTestId("test-title")).toBeTruthy();
  });

  test("It should check title toBe 'Hola, soy Gokú'", () => {
    // Arrange
    const title = "Hola, soy Gokú";

    // Act
    const { getByTestId } = render(<FirstApp title={title} />);

    // Assert
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("It should check title contain 'Hola, soy Gokú'", () => {
    // Arrange
    const title = "Hola, soy Gokú";

    // Act
    const { getByTestId } = render(<FirstApp title={title} />);

    // Assert
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("It should show the subTitle sending by props", () => {
    // Arrange
    const title = "Hola, soy Gokú";
    const subTitle = "Hola, soy el subtítulo";

    // Act
    const { getByText } = render(<FirstApp title={title} subTitle={subTitle} />);

    // Assert
    expect(getByText(subTitle).innerHTML).toBeTruthy();
  });

  test("It should show the subTitle sending by props", () => {
    // Este test lo estoy copiando para poder tener un ejemplo de verificar
    // Un elemento que se renderiza muchas veces, con el mismo prop
    // Arrange
    const title = "Hola, soy Gokú";
    const subTitle = "Hola, soy el subtítulo";

    // Act
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);

    // Assert
    expect(getAllByText(subTitle).length).toBe(3);
  });
});
