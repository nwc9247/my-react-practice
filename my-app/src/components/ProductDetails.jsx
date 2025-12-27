import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading..</p>;
  if (!product) return <p>No data found</p>;
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Rs: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
