import { catalogItems } from "@/data";
import ProductDetail from "@/components/client/product-detail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const product = catalogItems.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetail
      id={product.id}
      imageUri={product.imageUri}
      title={product.title}
      description={product.description}
      price={product.price}
      info={product.info}
      whatIsInTheBox={product.whatIsInTheBox}
      morePhotos={product.morePhotos}
    />
  );
}
