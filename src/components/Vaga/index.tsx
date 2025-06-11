type VagaProps = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: VagaProps) => {
  return (
    <li>
      <h3>{titulo}</h3>
      <p>{localizacao} • {nivel} • {modalidade}</p>
      <p>Salário: R${salarioMin} - R${salarioMax}</p>
      <ul>
        {requisitos.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
    </ul>
    </li>
)}

export default Vaga