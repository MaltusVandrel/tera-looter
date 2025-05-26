import { useEffect, useState } from 'react';
import { ESTACOES } from '../../../structs/enum/estacoes';

export const Home = () => {
  const [estacao, setEstacao] = useState('');

  const keys = Object.keys(ESTACOES);
  const listSize = Object.keys(ESTACOES).length;
  const getEstacaoValue = (key: string) => {
    return ESTACOES[key as keyof typeof ESTACOES];
  };
  const getEstacao = () => {
    const index = Math.floor(Math.random() * listSize);
    const key = keys[index];
    return getEstacaoValue(key);
  };

  return (
    <>
      <h1>{estacao}</h1>
      <button onClick={() => setEstacao(getEstacao())}>Mudar Estação</button>
      <ul>
        {keys.map((key: string) => {
          return <li>{getEstacaoValue(key)}</li>;
        })}
      </ul>
    </>
  );
};
