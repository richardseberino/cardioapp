import { useState } from "react";

export function FormularioPaciente({ onAddPaciente }) {
   const [nome, setNome] = useState("");
   const [idade, setIdade] = useState("");
   const [pressaoSistolica, setPressaoSistolica] = useState("");
   const [pressaoDiastolica, setPressaoDiastolica] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      if (!nome || !idade || !pressaoSistolica || !pressaoDiastolica) return;

      const paciente = {
         nome: nome.trim(),
         idade: parseInt(idade),
         pressaoSistolica: parseInt(pressaoSistolica),
         pressaoDiastolica: parseInt(pressaoDiastolica),
      };

      onAddPaciente(paciente);

      // Limpa os campos após o cadastro
      setNome("");
      setIdade("");
      setPressaoSistolica("");
      setPressaoDiastolica("");
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
         />
         <input
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Idade"
            type="number"
            min="1"
            max="120"
         />

         <div className="pressao-campos">
            <input
               value={pressaoSistolica}
               onChange={(e) => setPressaoSistolica(e.target.value)}
               placeholder="Pressão Sistólica (máxima)"
               type="number"
               min="60"
               max="250"
               required
            />
            <span className="separador-pressao">x</span>
            <input
               value={pressaoDiastolica}
               onChange={(e) => setPressaoDiastolica(e.target.value)}
               placeholder="Pressão Diastólica (mínima)"
               type="number"
               min="40"
               max="150"
               required
            />
         </div>

         <p className="exemplo-pressao">Exemplo: 120 x 80 mmHg</p>

         <button type="submit">Cadastrar Paciente </button>
      </form>
   );
}
