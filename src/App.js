import logo from './logo.svg';
import './App.css';
import data from'./data'

function App() {

    const Body= data.map(props=> {
      return (
        <Body
          image= { props.image}
          location={ props.location}
          title={ props.title}
          dates={props.dates}
          map={props.map}
          description={props.description}
        />
      )
    })
  
  return (
    
    {Body}

  );
}

export default App;
