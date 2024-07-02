import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Button } from "./Button";

interface PopularPlace {
  title: string;
  image: StaticImport
}

export function PopularPlace({ image, title }: PopularPlace) {
  return (
    <div className="flex flex-col items-center text-center  relative">
      <Image src={image} alt="Imagem do lugar" />
      <p className="text-3xl text-white absolute top-4">{title}</p>

      <Button placeholder='Ver pacotes' style={{ marginTop: '-20px' }} />
    </div>
  )
}