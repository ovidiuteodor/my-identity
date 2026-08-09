export default function CardExperienta(props: {functie: string, companie: string, anStart: number}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{props.functie}</h3>
      <p className="mt-2 text-gray-600">{props.companie} - {props.anStart}</p>
    </div>
  );
}