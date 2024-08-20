import { useState } from 'react';
import { CinemaSeat, FileiraCinema } from './FileiraCinema';
import './styles.css';
import testeassentos from './testeassentos.json';

export function EscolhaDeAssentos() {

  const fileiras = Object.values(testeassentos.SalaCinema1).map(fileira => fileira.LetraFileira);

  return(
    <div className="EscolhaDeAssentos">
        <div className="Assentos-Cinema">
          {fileiras.map((letter, index) => 
              <FileiraCinema
              key={index}
              FileiraLetra={letter}
              />
          )}
        </div>
      </div>
  )
}