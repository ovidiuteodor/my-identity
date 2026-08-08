function CardProiect(props: { titlu: string; descriere: string }) {
  return (
    <div>
      <h3>{props.titlu}</h3>
      <p>{props.descriere}</p>
    </div>
  );
}

function CardExperienta(props: {functie: string, companie: string, anStart: number}) {
  return (
    <div>
      <h3>{props.functie}</h3>
      <p>{props.companie} - {props.anStart}</p>
    </div>
  );
}

export default function Home() {
  const proiecte = [
    { titlu: "Minesweeper Java", descriere: "Un joc facut in Java." },
    { titlu: "My Identity", descriere: "Site-ul pe care il construiesc acum." },
  ];

  const experienta = [
    { functie: "Software Engineer", companie: "Google", anStart: 2020 },
    { functie: "Frontend Developer", companie: "Facebook", anStart: 2018 },
  ];

  return (
    <main>
      <h1>My Identity</h1>

      <h2>Proiecte</h2>
      {proiecte.map((proiect) => (
        <CardProiect
          key={proiect.titlu}
          titlu={proiect.titlu}
          descriere={proiect.descriere}
        />
      ))}

      <h2>Experienta</h2>
      {experienta.map((exp) => (
        <CardExperienta
          key={exp.functie}
          functie={exp.functie}
          companie={exp.companie}
          anStart={exp.anStart}
        />
      ))}
    </main>
  );
}