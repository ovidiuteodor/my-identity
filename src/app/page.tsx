"use client";

import { useState } from "react";

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

  const [contor, setContor] = useState(0);

  const [ascuns, setAscuns] = useState(false);

  const [nume, setNume] = useState("");

  const[functie, setFunctie] = useState("");

  const[oras, setOras] = useState("");

  return (
    <main className="mx-auto max-w-3xl p-8">
      
      <h1 className="text-4xl font-bold text-blue-600">My Identity</h1>

    <div className="flex flex-col gap-2">
    <button
      onClick={() => setContor(contor + 1)}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
      Ai apasat de {contor} ori
    </button>

    <button
      onClick={() => setContor(0)}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
      Reseteaza butonul
    </button>
    
    <button
      onClick={() => setAscuns(!ascuns)}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
      {ascuns ? "Arata" : "Ascunde"} secțiunea de proiecte
    </button>

    </div>

      <h2 className="text-2xl font-semibold mt-8 ">Proiecte</h2>
      {!ascuns &&
      <div className="flex flex-col gap-4 mt-8">
      {proiecte.map((proiect) => (
        <CardProiect
          key={proiect.id}
          titlu={proiect.titlu}
          descriere={proiect.descriere}
        />
      ))}
      </div>
}

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

      <input
       type="text"
       value={nume}
       onChange={(e) => setNume(e.target.value)}
       placeholder="Scrie numele tau"
       className="rounded-lg border border-gray-300 px-4 py-2"
      />

      <input
       type="text"
       value={functie}
       onChange={(e) => setFunctie(e.target.value)}
       placeholder="Scrie functia ta"
       className="rounded-lg border border-gray-300 px-4 py-2 mt-4"
      />

      <input
       type="text"
       value={oras}
       onChange={(e) => setOras(e.target.value)}
       placeholder="Scrie orasul tau"
       className="rounded-lg border border-gray-300 px-4 py-2 mt-4"
      />

      {nume && functie && oras && (
      <div>
      <p className="mt-2">Salut, {nume}!</p>
      <p className="mt-2">Functia ta este: {functie}</p>
      <p className="mt-2">Orasul tau este: {oras}</p>
      </div>
      )}
    </main>
  );
}