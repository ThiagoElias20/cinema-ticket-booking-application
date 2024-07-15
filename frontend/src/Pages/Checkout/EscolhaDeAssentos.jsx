import { useState } from 'react';
import { CinemaSeat, FileiraCinema } from './FileiraCinema';
import './styles.css';

export function EscolhaDeAssentos() {

  const letters = ["A", "B", "C", "D", "E"];

  return(
    <div className="EscolhaDeAssentos">
        <div className="Assentos-Cinema">
          {letters.map((letter, index) => 
              <FileiraCinema
              key={index}
              FileiraLetra={letter}
              />
          )}
        </div>
      </div>
  )
}