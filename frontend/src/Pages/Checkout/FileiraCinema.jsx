import React, { useState } from "react";
import testeassentos from './testeassentos.json';

export function FileiraCinema(props) {
  const [assentosClicados, setAssentosClicados] = useState({});

  function clicandoAssento(id) {
    setAssentosClicados(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  // Encontrar a fileira específica no JSON
  const fileira = Object.values(testeassentos.SalaCinema1).find(fileira => fileira.LetraFileira === props.FileiraLetra);

  return (
    <div className="Assentos-Cinema-Fileira">
      <div className="Assentos-Cinema-Fileira-Letra">{props.FileiraLetra}</div>
      {fileira.Assentos.map((number, index) => 
        <CinemaSeat
        key={index}
        FileiraNum={props.FileiraLetra + number}
        clicandoAssento={() => clicandoAssento(number)}
        isAssentoClicado={assentosClicados[number]}
        id={number}
        isNull={number === null} // Verifica se o assento é null
        notNull={number != null} // Verifica se o assento não é null
      />
        
      )}
    </div>
  );
}

export function CinemaSeat(props) {
  return ( 
    <div onClick={props.notNull ? props.clicandoAssento : null} className={`Assentos-Cinema-Fileira-Seat ${props.isNull ? "Seat-Null" : ""}`} id={props.id}>
      {props.isAssentoClicado ? (
        <span className="Seat-Text">{props.FileiraNum}</span>
      ) : (
        <span className="Seat-Text"></span>
      )}
    </div>
  );
}