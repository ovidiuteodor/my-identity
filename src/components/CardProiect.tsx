export default function CardProiect(props: { titlu: string; descriere: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{props.titlu}</h3>
      <p className="mt-2 text-gray-600" >{props.descriere}</p>
    </div>
  );
}