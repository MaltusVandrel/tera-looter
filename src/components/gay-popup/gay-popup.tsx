import { useRef, type Dispatch, type SetStateAction } from 'react';
import type { GayListEntry } from '../../structs/interface/list';
import './gay-popup.scss';

interface GayPopupProps {
  entry: GayListEntry;
  setEntry: Dispatch<SetStateAction<GayListEntry | undefined>>;
}
export const GayPopup = ({ entry, setEntry }: GayPopupProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeDialog = () => {
    dialogRef?.current?.remove();
    setEntry(undefined);
  };

  return (
    <div className="gay-dialog-backdrop">
      <div
        className="gay-dialog"
        ref={dialogRef}>
        {JSON.stringify(entry)}
        <button onClick={closeDialog}>✖</button>
      </div>
    </div>
  );
};
