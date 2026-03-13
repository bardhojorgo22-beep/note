export default async function ProductId({ params }) {
  const { id } = await params;
  return <div>the id of this product is {id}</div>;
}
