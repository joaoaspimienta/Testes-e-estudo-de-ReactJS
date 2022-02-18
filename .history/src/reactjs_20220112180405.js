//Props

const RpgProfile = (props) => {
  return(
    <div>
      <h2>Bem vindo {props.name}</h2>
      <h3>Seu nível é {props.lvl}</h3>
    </div>
  )
}

function App() {
  return(
    <div>
      <RpgProfile name='Frei' lvl='10' />
      <RpgProfile name='Sky' lvl='15' />
    </div>
  )
}


//Class

class RpgProfile extends Component{
  render(){
    return(
      <div>
        <h2>Bem vindo {props.name}</h2>
        <h3>Seu nível é {props.lvl}</h3>
      </div>
    )  
  }
}

function App() {
  return(
    <div>
      <RpgProfile name='Frei' lvl='10' />
      <RpgProfile name='Sky' lvl='15' />
    </div>
  )
}

//Classes com States

class MostraNome extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'EMIYA'
    };
  }

  render(){
    return(
      <div>
        {this.state.nome}
      </div>
    );
  }
}

 export default MostraNome;

 
//Ciclos de vida dos componentes
componentDidMount() //executa algo ao ser renderizado
componentDidUpdate() //faz algo quando o componente sofre uma alteração
shouldComponentUpdate() //retorna true ou false para atualizar o componente mediante uma condição

componentWillMount() //Todas as coisas que você deseja fazer antes do componente ser montado devem ser definidas aqui.
componentDidMount() //Este é o método que é executado depois que o componente foi montado no DOM
componentDidUpdate() //é chamado imediatamente após a atualização.
componentWillUpdate() //É executado somente quando shouldComponentUpdate devolver true.
componentWillUnmount() //o componente não é mais necessário e será desmontado do DOM


//Renderização condicional com ternario

return(
  <div>
    {this.state.logado ?
    <div><p>O usuario está logado</p></div> :
    <div><p>Não está logado</p></div>
  }</div>
)


//Exemplo de map(?)
const Users = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
  );
};

//Exemplo de componentes gerados com map
//https://codesandbox.io/s/teste-de-map-em-divs-fydip?file=/src/App.js

//Mesmo exemplo, mas simplificado 
//https://codesandbox.io/s/teste-de-map-em-divs-simplificado-p8yh2?file=/src/App.js

//Usando dados de dentro de um input em caixas de texto e imagens
//https://codesandbox.io/s/puxando-dados-do-input-e-usando-em-caixa-de-texto-e-trocando-imagem-qm32t?file=/src/App.js


//Forms
//Existe a onSubmit={} na qual é possível passar uma função para ser executada quando clicarem no botão tipo submit de um formulário