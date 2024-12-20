import { useState, useRef } from "react";
import { v4 } from "uuid";
import { Container, Titulo, Input, AddBtn, Tasks } from "./style";



function App() {

  let day = new Date().getDay();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();


  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let currentDate = day + " / " + month + " / " + year;


  const inputValue = useRef();
  const [tarefas, setTarefas] = useState([]);


  function addTarefa() {
    setTarefas([{ id: v4(), nome: inputValue.current.value }, ...tarefas]);
    inputValue.current.value = '';
  }

  function deleteTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }    
    
    return (
    <Container>

      <Titulo>Listas de Tarefas</Titulo> 

      <Input autoCorrect="off" type="text" placeholder="Adicionar tarefas..." ref={inputValue} /> 

      <AddBtn onClick={addTarefa}>+</AddBtn> {tarefas.map((tarefa) => 

        (<Tasks key={tarefa.id} >
         <p>{tarefa.nome}</p>
          <p>{currentDate}</p> 
          <button onClick={() => deleteTarefa(tarefa.id)}>X</button> 
          </Tasks>))} 

      </Container>);

} 

export default App;






























