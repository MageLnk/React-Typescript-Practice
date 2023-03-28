import { useContext } from "react";
// Context
import { ProductContext } from "./ProductCard";
// styles
import styles from "../styles/styles.module.css";
// App
const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return <span className={styles.productDescription}>{title ? title : product.title}</span>;
};

export default ProductTitle;
