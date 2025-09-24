type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Product Detail: {params.slug}</h1>
    </div>
  );
}
