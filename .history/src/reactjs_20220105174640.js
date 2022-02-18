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