import { render, screen } from "@testing-library/react";
import FirstApp from "./FirstApp";
describe("Given <FirstApp /> component", () => {
  const title = "Hola, soy Gokú";
  const subTitle = "Ola, subtitle o k ase";

  test("It should exist", () => {
    // Arrange
    // Act
    // Assert
  });
  test("It should match with the snapshot", () => {
    // Arrange
    const { container } = render(<FirstApp title={title} />);

    // Act

    // Assert
    expect(container).toMatchSnapshot();
  });

  test("It should check msg says 'Hola, soy Gokú'", () => {
    // Arrange

    // Act
    render(<FirstApp title={title} />);

    // Assert
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("It should check for title in h1 exist", () => {
    // Arrange

    // Act
    render(<FirstApp title={title} />);

    // Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
    // Recordar que, usar el toContain() o toBe(), la diferencia es la exigencia al test
  });

  test("It should check subTitle sending by props", () => {
    // Arrange

    // Act
    render(<FirstApp title={title} subTitle={subTitle} />);

    // Assert
    expect(screen.getByText(subTitle).innerHTML).toBeTruthy();
  });
});
