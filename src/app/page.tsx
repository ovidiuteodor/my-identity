function CardProiect(props: { titlu: string; descriere: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{props.titlu}</h3>
      <p className="mt-2 text-gray-600" >{props.descriere}</p>
    </div>
  );
}

function CardExperienta(props: {functie: string, companie: string, anStart: number}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{props.functie}</h3>
      <p className="mt-2 text-gray-600">{props.companie} - {props.anStart}</p>
    </div>
  );
}

export default function Home() {
  const proiecte = [
    {id: 1, titlu: "Minesweeper Java", descriere: "Un joc facut in Java." },
    {id: 2, titlu: "My Identity", descriere: "Site-ul pe care il construiesc acum." },
  ];

  const experienta = [
    {id: 1, functie: "Software Engineer", companie: "Google", anStart: 2020 },
    {id: 2, functie: "Frontend Developer", companie: "Facebook", anStart: 2018 },
  ];

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold text-blue-600">My Identity</h1>

      <h2 className="text-2xl font-semibold mt-8">Proiecte</h2>
      <div className="flex flex-col gap-4 mt-8">
      {proiecte.map((proiect) => (
        <CardProiect
          key={proiect.id}
          titlu={proiect.titlu}
          descriere={proiect.descriere}
        />
      ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Experienta</h2>
      <div className="flex flex-col gap-4 mt-8">
      {experienta.map((exp) => (
        <CardExperienta
          key={exp.id}
          functie={exp.functie}
          companie={exp.companie}
          anStart={exp.anStart}
        />
      ))}
      </div>

    </main>
  );
}