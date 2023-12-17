import React, { useState } from 'react';

function App() {
 const [nombre, setNombre] = useState('');
 const [edad, setEdad] = useState('');
 const [mensaje, setMensaje] = useState('');

 const manejarSubmit = (e) => {
    e.preventDefault();

    if (edad < 18) {
      setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
    } else {
      setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
    }
 };

 return (
    <div className="App">
      <form onSubmit={manejarSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
 );
}

export default App;