import Image from "next/image";
import master from '@/public/logo-da-bandeira-mastercard 1.png'
import visa from '@/public/logo-da-visa-bandeira-cartao 1.png'
import diners from '@/public/Diners-Club-Logo 1.png'
import facebook from '@/public/facebook.png'
import instagram from '@/public/instagram.png'
import tiktok from '@/public/tiktok.png'

export function Footer() {
  return (
    <footer className="w-full flex justify-between items-center bg-[#FF914D] p-20 mt-44">
      <div className="flex flex-col">
        <p className="font-bold text-3xl text-white">Formas de pagamento</p>
        <div className="flex gap-5">
          <Image src={master} alt="Imagem do Master Card" />
          <Image src={visa} alt="Imagem da Visa" />
          <Image src={diners} alt="Imagem do Diners Club" />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-3xl text-white">Redes Sociais</p>
        <div className="flex gap-5">
          <Image src={facebook} alt="Imagem do Master Card" />
          <Image src={instagram} alt="Imagem da Visa" />
          <Image src={tiktok} alt="Imagem do Diners Club" />
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl text-white">Televendas</p>
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-white">(11) 3333-2565</p>
          <p className="text-2xl text-white">Segunda a Sábado : 9 às 21h</p>
          <p className="text-2xl text-white">Domingo: 10 às 16h</p>

        </div>

      </div>
    </footer>
  )
}