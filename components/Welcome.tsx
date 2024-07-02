import Image from "next/image"
import logo from '@/public/Tour Travel Business Logo.png'
import { Button } from "./Button"
import { Options } from "./Options"
import { getTravels } from "@/app/api/route"
import { Response } from "@/types/Response"

export async function Welcome() {
  const { data, dictionaries }: Response = await getTravels()
  const iataCode = data[0].itineraries[0].segments[data[0].itineraries[0].segments.length - 1].arrival.iataCode
  const countryCode = dictionaries.locations[iataCode].countryCode
  const responseCountry = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${countryCode}`, {
    method: 'GET'
  })

  const country = await responseCountry.json()
  console.log(data[0].lastTicketingDate, 'data')

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
                <p className="font-bold">{country[0].nome.abreviado}</p>
              </div>

              <div className="">
                <p className="text-gray-400">Nº de passageiros</p>
                <p className="font-bold">{data[0].numberOfBookableSeats}</p>
              </div>

              <div className="">
                <p className="text-gray-400">Check-in</p>
                <p className="font-bold">{data[0].lastTicketingDate}</p>
              </div>
              <Button placeholder="Procurar pacotes" />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}