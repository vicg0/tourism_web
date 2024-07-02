import Image from "next/image"
import hero from '@/public/pexels.png'
import logo from '@/public/Tour Travel Business Logo.png'
import { Button } from "./Button"
import { Options } from "./Options"

export function Welcome() {
  return (
    <div className="w-full flex justify-center relative bg-hero-pattern bg-no-repeat bg-center bg-cover pb-24">

      <div className="flex flex-col gap-20 w-full py-10 px-40 z-10">
        <div className="flex justify-between items-center">
          <header className="flex justify-between">
            <Image src={logo} alt="" />
          </header>

          <div className="flex gap-3">
            <Button placeholder="Login" second={true} />
            <Button placeholder="Registrar" />
          </div>

        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8 text-white w-1/2">
            <h1 className="text-5xl">Oferecemos os melhores pacotes de viagem para suas férias!</h1>
            <p className="text-xl text">A Agência de Viagens oferece serviços personalizados para quem busca destinos incríveis. Com nossos pacotes de viagem, você terá uma experiência única e inesquecível. Realize seus sonhos de viajar conosco!</p>

          </div>

          <div className="flex flex-col">
            <Options />
            <div className="bg-white flex justify-between px-8 py-6 rounded-b-2xl rounded-tr-2xl">
              <div className="">
                <p className="text-gray-400">Localização</p>
                <p className="font-bold">Russia</p>
              </div>

              <div className="">
                <p className="text-gray-400">Nº de passageiros</p>
                <p className="font-bold">03 passageiros</p>
              </div>

              <div className="">
                <p className="text-gray-400">Check-in</p>
                <p className="font-bold">22 Dez 2023</p>
              </div>
              <Button placeholder="Procurar pacotes" />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}