import { useEffect, useState } from 'react';
import {
  estacoes,
  GAY_CALL_TYPE,
  type GayListEntry,
} from '../../../structs/interface/list';
import './home.scss';
import { GayPopup } from '../../../components/gay-popup/gay-popup';

export const Home = () => {
  const [drawnEntry, setDrawnEntry] = useState<Array<GayListEntry>>();
  const [selectedEntry, setSelectedEntry] = useState<GayListEntry>();

  const [callType, setCallType] = useState<string>('SIMPLE');

  const entries = estacoes.entries;
  const listSize = entries.length;
  const getRandomEntry = () => {
    const index = Math.floor(Math.random() * listSize);
    const entry = entries[index];
    return entry;
  };
  const callBehaviourMap: {
    [key in keyof typeof GAY_CALL_TYPE]: () => Array<GayListEntry>;
  } = {
    SIMPLE: () => {
      return [getRandomEntry()];
    },
    BIASED: () => {
      return [getRandomEntry()];
    },
    MULTIPLE: () => {
      return [getRandomEntry(), getRandomEntry()];
    },
    UNRELIABLE: () => {
      return [getRandomEntry()];
    },
  };
  const doCall = () => {
    console.log('callType: ' + callType);
    setDrawnEntry(callBehaviourMap[callType as keyof typeof GAY_CALL_TYPE]);
  };

  return (
    <>
      <div className="gay-entries">
        {drawnEntry?.map((e, index) => (
          <button
            key={index}
            onClick={() => setSelectedEntry(e)}>
            {e.title}
          </button>
        ))}
      </div>
      <div>
        <select onChange={(event) => setCallType(event.target.value)}>
          {Object.keys(GAY_CALL_TYPE).map((key, index) => {
            const gayKey = key as keyof typeof GAY_CALL_TYPE;
            return (
              <option
                key={index}
                value={key}>
                {GAY_CALL_TYPE[gayKey]}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={doCall}>{estacoes.title}</button>
      <ul>
        {entries.map((entry: GayListEntry, index) => {
          return <li key={index}>{entry.title}</li>;
        })}
      </ul>
      {selectedEntry && (
        <GayPopup
          entry={selectedEntry}
          setEntry={setSelectedEntry}
        />
      )}
    </>
  );
};
