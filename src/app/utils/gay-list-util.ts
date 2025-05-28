import type {
  GAY_CALL_TYPE,
  GayCall,
  GayList,
  GayListEntry,
  GayListResult,
  GayListSet,
} from '../../structs/interface/list';

const callBehaviourMap: {
  [key in keyof typeof GAY_CALL_TYPE]: (list: GayList) => Array<GayListEntry>;
} = {
  SIMPLE: (list: GayList) => {
    return [getRandomEntry(list)];
  },
  BIASED: (list: GayList) => {
    return [getRandomEntry(list)];
  },
  MULTIPLE: (list: GayList) => {
    return [getRandomEntry(list), getRandomEntry(list)];
  },
  UNRELIABLE: (list: GayList) => {
    return [getRandomEntry(list)];
  },
};
const getRandomEntry = (list: GayList) => {
  const entries = list.entries;
  const index = Math.floor(Math.random() * entries.length);
  const entry = entries[index];
  return entry;
};
export const doCall = (call: GayCall, list: GayList) => {
  const entries =
    callBehaviourMap[call.type as keyof typeof GAY_CALL_TYPE](list);
  entries.forEach((entry) => {
    if (entry.otherCalls) {
      entry.otherCalls.forEach((oCall) => {
        entry.subEntries = doCall(oCall.call, oCall.list);
      });
    }
  });
  return entries;
};
export const runSet = (set: GayListSet) => {
  const results = set.calls.map((call) => {
    const gayCall = call.call;
    const gayList = call.list;
    const gayEntries = doCall(gayCall, gayList);
    const gayResult: GayListResult = {
      entries: gayEntries,
      call: gayCall,
      list: gayList,
    };
    return gayResult;
  });
  return results;
};
