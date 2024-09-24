import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Fetch product data here */}
    </div>
  );
};

export default ProductPage;
