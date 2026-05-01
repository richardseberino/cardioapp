export function ListaPacientes({ pacientes }) {
   return (
      <ul>
         {pacientes.map((p, i) => (
            <li key={i}>{p.nome} - {p.idade} anos - {p.pressaoSistolica}x{p.pressaoDiastolica} mmHg</li>
         ))}
      </ul>
   );
}
