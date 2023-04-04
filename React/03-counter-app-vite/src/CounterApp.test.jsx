import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "./CounterApp";
describe("Given <CounterApp /> component", () => {
  const initialValue = 10;
  test("It should exist", () => {
    // Arrange
    // Act
    // Assert
  });

  test("It should match with the snapshot", () => {
    // Arrange
    const { container } = render(<CounterApp value={initialValue} />);

    // Act

    // Assert
    expect(container).toMatchSnapshot();
  });

  test("It should check props value = 100", () => {
    // Arrange

    // Act
    render(<CounterApp value={100} />);

    // Assert
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test("It should increase value with the button +1", () => {
    // Arrange
    render(<CounterApp value={initialValue} />);

    // Act
    fireEvent.click(screen.getByText("+1"));

    // Assert
    expect(screen.getByText(11)).toBeTruthy();
  });

  test("It should decrease value with the button -1", () => {
    // Arrange
    render(<CounterApp value={initialValue} />);

    // Act
    fireEvent.click(screen.getByText("-1"));

    // Assert
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("9");
  });

  test("It should work reset button", () => {
    // Arrange
    render(<CounterApp value={initialValue} />);

    // Act
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByLabelText("btn-reset"));
    // O
    //fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    // Assert
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
