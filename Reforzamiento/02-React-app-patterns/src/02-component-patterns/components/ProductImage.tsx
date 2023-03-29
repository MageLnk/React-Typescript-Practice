import { useContext } from "react";
// Context
import { ProductContext } from "./ProductCard";
// styles
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
// app

export interface ProductImageProps {
  img?: string;
  className?: string;
}

const ProductImage = ({ img, className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return <img className={`${styles.productImg} ${className}`} src={img ? img : product.img} alt="Product" />;
};

export default ProductImage;
