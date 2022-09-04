import React from 'react'
import PokemonSimple from './PokemonSimple'

export default function PokemonFull({ dex }) {
  return (
    <div>
      {dex.map((entry) => (
        <div key={entry}>
          
        </div>
      ))}
    </div>
  );
}
