import { useContext } from "react";
// Context
import { ProductContext } from "./ProductCard";
// Styles
import styles from "../styles/styles.module.css";
// App
const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

export default ProductButtons;
