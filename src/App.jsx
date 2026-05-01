import { useState, useEffect } from 'react';
import { FormularioPaciente } from './components/FormularioPaciente';
import { ListaPacientes } from './components/ListaPacientes';
import './styles.css';

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [jaCarregou, setJaCarregou] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('pacientes');
    if (dadosSalvos) setPacientes(JSON.parse(dadosSalvos));
    setJaCarregou(true);
  }, []);

  useEffect(() => {
    // Só salva no localStorage após ter carregado os dados iniciais
    if (jaCarregou) {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }
  }, [pacientes, jaCarregou]);

  function adicionarPaciente(p) {
    setPacientes([...pacientes, p]);
  }

  return (
    <div>
      <h1>CardioIA – Batimentos de Dados</h1>
      <FormularioPaciente onAddPaciente={adicionarPaciente} />
      <ListaPacientes pacientes={pacientes} />
    </div>
  );
}
