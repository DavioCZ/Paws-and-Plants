type Props = {
  params: { slug: string };
};

export default function RitualDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Ritual Detail: {params.slug}</h1>
    </div>
  );
}
