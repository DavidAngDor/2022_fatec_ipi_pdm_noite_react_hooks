import Accordion from './Accordion.js'

const itens = [
  {
    titulo: "Java",
    descricao: "Linguagem compilada e integrada"
  },
  {
    titulo: "Python",
    descricao: "Linguagem integrada e dinamicamente tipada"
  },
  {
    titulo: "Javascript",
    descricao: "Linguagem integrada, executada do lado do cliente e do servidor também"
  }
]

const App = () => {
  return (
    <Accordion itens={itens}></Accordion>
  )
}

export default App