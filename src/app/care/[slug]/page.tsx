type Props = {
  params: { slug: string };
};

export default function CareDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Care Guide Detail: {params.slug}</h1>
    </div>
  );
}
