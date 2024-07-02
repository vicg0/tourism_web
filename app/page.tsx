import { Welcome } from "@/components/Welcome";
import { getTravels } from "./api/route";
import Image from "next/image";
import tokyo from '@/public/tokyo.png'
import mountain from '@/public/mountain.png'
import usa from '@/public/usa.png'
import { Avaliation } from "@/components/Avaliation";
import { Button } from "@/components/Button";
import { PopularPlace } from "@/components/PopularPlace";
import disney from '@/public/disneyOrlando.png'
import disneyParis from '@/public/disneyParis.png'
import carrero from '@/public/carrero.png'
import { Footer } from "@/components/Footer";
import { Response } from "@/types/Response";

export default async function Home() {
  // const response: Response = await getTravels()
  // console.log(response)

  return (
    <main className="flex flex-col items-center justify-center">
      <Welcome />

      <div className="flex flex-col w-full justify-between gap-36 px-40 z-10">
        <div className="flex justify-between items-center -mt-16">
          <div className="w-1/2 flex flex-col gap-7">
            <h2 className="text-4xl font-bold">Escolha os melhores destinos na melhor agência</h2>

            <div className="pl-6 border-l-4 border-[#FF914D] text-lg">
              <p>Com a Agência de Viagens, você pode explorar os melhores destinos ao redor do mundo. Oferecemos pacotes personalizados para destinos exóticos, praias paradisíacas, cidades históricas e muito mais. Descubra novas culturas, experimente novos sabores e crie memórias inesquecíveis em sua próxima viagem.</p>
            </div>

            <div className="flex flex-col mt-14 text-center gap-3">

              <h2 className="text-4xl font-bold text-[#FF914D]">Destinos mais procurados</h2>

              <div className="flex gap-5 justify-center flex-wrap">

                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">China</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Moscow</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Nova York</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Tokyo</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Seul</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Alaska</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Sidney</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Paris</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Suiça</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Santiago</p>
                <p className="w-max text-2xl font-bold hover:border-b-4 hover:border-[#FF914D]">Rio de Janeiro</p>

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Image src={tokyo} alt="Foto de Tokyo" className="rounded-3xl" />
            <Image src={mountain} alt="Foto de montanhas" className="rounded-3xl" />
            <Image src={usa} alt="Foto dos Estados Unidos" className="rounded-3xl" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-20">
          <h2 className="text-4xl font-bold w-1/2 text-center">Veja o que nossos clientes dizem
            sobre nossos serviços</h2>

          <div className="flex flex-wrap justify-center gap-24">
            <Avaliation name="Victor" comment="Foi inesquecivel" destiny="Paris" stars={5} />
            <Avaliation name="Victor" comment="Foi inesquecivel" destiny="Paris" stars={5} />
            <Avaliation name="Victor" comment="Foi inesquecivel" destiny="Paris" stars={5} />

          </div>

        </div>

        <div className="flex flex-col gap-12 justify-center text-center">
          <h2 className="text-6xl font-bold">Categorias populares</h2>

          <div className="flex gap-24 justify-center">
            <Button placeholder="Parques" />
            <Button placeholder="Praias" />
            <Button placeholder="Monumentos" />
          </div>

          <div className="flex gap-12">
            <PopularPlace image={disney} title="Disney Orlando - Florida" />
            <PopularPlace image={carrero} title="Beto Carrero" />
            <PopularPlace image={disneyParis} title="Disney Paris - França" />
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
