import React, { useState } from "react";

export function FileiraCinema(props) {
  const [isAssentoClicado, setAssentoClicado] = useState(false);

  function clicandoAssento() {
    setAssentoClicado(true);
  }

  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <div className="Assentos-Cinema-Fileira">
      <div className="Assentos-Cinema-Fileira-Letra">{props.FileiraLetra}</div>
       {numbers.map((number, index) => 
        <CinemaSeat
        key={index}
        FileiraNum={props.FileiraLetra + number}
        clicandoAssento={clicandoAssento}
        isAssentoClicado={isAssentoClicado}
        />
       )}
        
    </div>
  )
}

export function CinemaSeat(props) {
  return (
    <div onClick={props.clicandoAssento} className="Assentos-Cinema-Fileira-Seat">
      {props.isAssentoClicado ? (
        <span className="Seat-Text">{props.FileiraNum}</span>
      ) : (
        <span className="Seat-Text"></span>
      )}
    </div>
  )
}