import { createContext } from "react";
// Hooks
import useProduct from "../hooks/useProduct";
// Interfaces
import { ProductContextProps, ProductCardProps } from "../interfaces/Products.interfaces";
// Styles
import styles from "../styles/styles.module.css";
// App

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;

//<ProductImage img={product.img} />
//<ProductTitle title={product.title} />
//<ProductButtons counter={counter} increaseBy={increaseBy} />
