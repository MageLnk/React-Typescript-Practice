import { useContext } from "react";
// Context
import { ProductContext } from "./ProductCard";
// styles
import styles from "../styles/styles.module.css";
// App

export interface ProductTitleProps {
  title?: string;
  className?: string;
}

const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>;
};

export default ProductTitle;
