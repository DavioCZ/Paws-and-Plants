type Props = {
  params: { slug: string };
};

export default function PetSafeDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Plant Detail: {params.slug}</h1>
    </div>
  );
}
