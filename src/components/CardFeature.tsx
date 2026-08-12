export default function CardFeature(props:{ titlu: string, descriere: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{props.titlu}</h3>
      <p className="text-gray-600">{props.descriere}</p>
    </div>
  );
}