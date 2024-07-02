import Image from "next/image";
import aspas from "@/public/quote-left.png"
import client from '@/public/client.png'
import star from '@/public/star.png'
import { Star } from 'lucide-react'

interface AvaliationProps {
  name: string;
  destiny: string;
  comment: string;
  stars: number;
}

export function Avaliation({ name, destiny, comment, stars }: AvaliationProps) {
  return (
    <div className="w-80 flex flex-col bg-gray-200 p-5 rounded-2xl gap-3">
      <div className="flex gap-2">
        <Image src={client} alt="Foto do cliente" />
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-gray-500">Destino: {destiny}</p>
        </div>
      </div>

      <Image src={aspas} alt="Aspas" />
      <p className="text-gray-400 text-center">{comment}</p>
      <div className="flex justify-between">

        {Array.from({ length: stars }).map((_, index) => (
          <Star key={index} fill="yellow" strokeWidth={2} />
        ))}
      </div>
    </div>
  )
}