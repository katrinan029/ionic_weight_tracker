export interface Measure {
  weight: string
  date: string
  id: number
}

const measures: Measure[] = [
  {
    weight: '110',
    date: 'August 1, 2021',
    id: 0,
  },
  {
    weight: '111',
    date: 'July 16, 2021',
    id: 1,
  },
  {
    weight: '115',
    date: 'June 16, 2021',
    id: 2,
  },
  {
    weight: '120',
    date: 'May 16, 2020',
    id: 3,
  },
]

export const getMeasures = () => measures;

export const getMeasure = (id: number) => measures.find(m => m.id === id);