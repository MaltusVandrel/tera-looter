export interface GayListEntry {
  title: string;
  description?: string;
  otherCalls?: Array<[GayCall, GayList]>;
  desirability?: GayEntryDesirability;
}
export interface GayList {
  title: string;
  entries: Array<GayListEntry>;
}
export interface GayCall {
  type: string;
  auxVal?: number;
}
export interface GayEntryDesirability {
  value: number;
  label: string;
}
const GAY_ENTRY_DESIRABILITY = {
  BEST: { value: 2, label: 'best' },
  GOOD: { value: 1, label: 'good' },
  COMMON: { value: 0, label: 'common' },
  BAD: { value: -1, label: 'bad' },
  WORSE: { value: -2, label: 'worse' },
};

export const GAY_CALL_TYPE = {
  SIMPLE: 'simple',
  MULTIPLE: 'multiple',
  BIASED: 'biased',
  UNRELIABLE: 'unreliable',
};
export const estacoes: GayList = {
  title: 'estacoes',
  entries: [
    {
      title: 'inferno',
      description: 'Você está cercado de mimimzentos',
      desirability: GAY_ENTRY_DESIRABILITY.BEST,
    },
    { title: 'primavera', desirability: GAY_ENTRY_DESIRABILITY.COMMON },
    { title: 'outono', desirability: GAY_ENTRY_DESIRABILITY.COMMON },
    { title: 'verão', desirability: GAY_ENTRY_DESIRABILITY.WORSE },
  ],
};
