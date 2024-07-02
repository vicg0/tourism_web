import { Option } from "./Option";

export function Options() {
  return (
    <div className="flex first:rounded-t-lg">

      <Option text="Destino" style={{ borderTopLeftRadius: 15 }} />
      <Option text="Vôos" />
      <Option text="Cruzeiros" style={{ borderTopRightRadius: 15 }} />
    </div>
  )
}