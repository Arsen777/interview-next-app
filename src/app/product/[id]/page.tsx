type ProductPageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div>
      <h1>Product Detail for {params.id}</h1>
      <p>This content is generated dynamically based on the URL parameter.</p>
    </div>
  );
}
