import {
  GAY_CALL_TYPE,
  GAY_ENTRY_DESIRABILITY,
  type GayList,
  type GayListSet,
} from '../../structs/interface/list';

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
export const colors: GayListSet = {
  title: 'Colors',
  description: 'Random Colors',
  calls: [
    {
      call: { type: GAY_CALL_TYPE.SIMPLE },
      list: {
        title: 'Colors',
        entries: [
          {
            title: 'Red',
          },
          {
            title: 'Pink',
          },
          {
            title: 'Purple',
          },
          {
            title: 'Deep Purple',
          },
          {
            title: 'Indigo',
          },
          {
            title: 'Blue',
          },
          {
            title: 'Light Blue',
          },
          {
            title: 'Cyan',
          },
          {
            title: 'Teal',
          },
          {
            title: 'Green',
          },
          {
            title: 'Light Green',
          },
          {
            title: 'Lime',
          },
          {
            title: 'Yellow',
          },
          {
            title: 'Amber',
          },
          {
            title: 'Orange',
          },
          {
            title: 'Deep Orange',
          },
          {
            title: 'Brown',
          },
          {
            title: 'Gray',
          },
          {
            title: 'Blue Gray',
          },
          {
            title: 'Black',
          },
          {
            title: 'White',
          },
        ],
      },
    },
  ],
};
