import Link from "next/link";
import CardFeature from "@/components/CardFeature";

export default function Home() {
  return (
    <main>
      <div  className="flex flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 ">
            My Identity
          </h1>
           <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
            Identitatea ta profesionala, intr-un singur loc. Creeaza un portofoliu modern sau un CV care sa te reprezinte.
          </p>
      </div>
      
      <div className="flex justify-center gap-6 px-4 py-20 text-center">
          <div className="flex justify-center gap-4">
            <Link href="/signup" className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                Creeaza cont
            </Link>

            <Link href="/login" className="cursor-pointer rounded-lg border border-blue-500 text-blue-400 px-6 py-3 transition hover:bg-blue-500 hover:text-white">
                Autentifică-te
            </Link>

            <Link href="/p/ovidiu" className="cursor-pointer text-white rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 font-medium hover:from-indigo-600 hover:to-blue-700">
                Vezi un exemplu
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-600">
            Ce iti ofera platforma?
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CardFeature
              titlu="CV profesional descarcabil PDF"
              descriere="Creaza-ti un CV curat si bine structurat gata de trimis catre recrutori."
            />
            <CardFeature
              titlu="Portofoliu personalizabil"
              descriere="Adauga proiectele, experienta si abilitatile tale intr-o prezentare vizuala atractiva."
            />
            <CardFeature
              titlu="Link public de share"
              descriere="Trimite un singur URL personalizat catre portofoliul tau celor care vor sa te cunoasca."
            />
          </div>
        </div>

    </main>
  );
}