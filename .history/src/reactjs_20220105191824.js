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
 componentDidUpdate() //é chamado imediatamente após a atualização.
componentWillUpdate() //É executado somente quando shouldComponentUpdatedevolver true.