import { useEffect, useState } from 'react';
import {
  GAY_CALL_TYPE,
  type GayListEntry,
  type GayListResult,
} from '../../../structs/interface/list';
import './home.scss';
import { GayPopup } from '../../../components/gay-popup/gay-popup';
import { colors } from '../../../app/data/basic-lists';
import { runSet } from '../../../app/utils/gay-list-util';

export const Home = () => {
  const set = colors;
  const [drawns, setDrawns] = useState<Array<GayListResult>>(runSet(set));
  const [selectedEntry, setSelectedEntry] = useState<GayListEntry>();

  const doRunSet = () => {
    setDrawns(runSet(set));
  };
  return (
    <>
      <div className="gay-entries">
        {drawns?.map((draw, index) => (
          <div key={index}>
            <h3 key={index}>{draw.list.title}</h3>
            {draw.entries.map((e, index) => (
              <button
                key={index}
                onClick={() => setSelectedEntry(e)}>
                {e.title}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button onClick={doRunSet}>{set.title}</button>

      {selectedEntry && (
        <GayPopup
          entry={selectedEntry}
          setEntry={setSelectedEntry}
        />
      )}
    </>
  );
};
