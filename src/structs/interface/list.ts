export interface GayListSet {
  title: string;
  description?: string;
  calls: Array<GayEntryCall>;
}
export interface GayListEntry {
  title: string;
  description?: string;
  otherCalls?: Array<GayEntryCall>;
  subEntries?: Array<GayListEntry>;
  desirability?: GayEntryDesirability;
  dropChanceAmount?: Array<GayEntryChance>;
  unity?: string;
}
export interface GayEntryCall {
  list: GayList;
  call: GayCall;
}
export interface GayListResult {
  entries: Array<GayListEntry>;
  list: GayList;
  call: GayCall;
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
export interface GayEntryChance {
  label: string;
  chance: number;
  amount: number;
}
export const GAY_ENTRY_CHANCE = {
  RARE: { chance: 0.125, label: 'rare' },
  FAIRLY_RARE: { chance: 0.25, label: 'fairly rare' },
  UNCOMMON: { chance: 0.5, label: 'uncommon' },
  FAIRLY_UNCOMMON: { chance: 0.75, label: 'fairly uncommon' },
  COMMON: { chance: 0.875, label: 'common' },
  CERTAIN: { chance: 1, label: 'certain' },
};
export const GAY_ENTRY_DESIRABILITY = {
  BEST: { value: 2, label: 'best' },
  GOOD: { value: 1, label: 'good' },
  COMMON: { value: 0, label: 'common' },
  BAD: { value: -1, label: 'bad' },
  WORSE: { value: -2, label: 'worse' },
};

export const GAY_CALL_TYPE = {
  SIMPLE: 'SIMPLE',
  MULTIPLE: 'MULTIPLE',
  BIASED: 'BIASED',
  UNRELIABLE: 'UNRELIABLE',
};
