//REACT IMPORTS
import './App.css';
import React, { useState, useRef } from 'react';

//USER IMPORTS
import TodoItem from './components/TodoItem';

//MATERIALUI IMPORTS
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App2() {
  return (
    <div className="App">
      <h1>Ola mundo</h1>
    </div>
  );
}

const App = () => {

    const [name, setname] = React.useState('Valor')
    
    React.useEffect(()=>{
      console.log('useEffect com dependecias vazias')
    }, [])
    React.useEffect(()=>{
      console.log('useEffect com dependecia [name]')
    }, [name])
    React.useEffect(()=>{
      console.log('useEffect sem dependencias')
    })
    console.log('render')

  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const inputEl = useRef(null)

  const handclick = () => {

    if (value == '') {
      console.log('Inputbox vazia !');
    } else {
      setData(prev =>[...prev, value])
    }
    setValue('')
  }

  return(
    <div class="App">
      <h1>Hello word!</h1>
      <p>{name}</p>
      <button onClick={null}>Alterar variavel</button>

      <br></br>
      
      <input ref={inputEl} type="text" value={value} onChange={event => setValue(event.target.value)}></input>
      <button onClick={handclick}>Add</button>
      <div>
        <ul>
          {
            data.map((item, index)  =>(
              <TodoItem name={item} key={index}></TodoItem>
            ))
          }
        </ul>
      </div>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#ec0000', height: '120px', width: '100%', alignSelf: 'center' }} />
      </Container>
    </div>
  )
}

export default App;
