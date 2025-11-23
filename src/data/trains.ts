import { stations } from './stations';

export interface Train {
  id: string;
  type: string;
  priority: number;
  arrival: number;
  speed: number;
  pos: number;
  delay?: number;
}

export const generateTrains = (n = 20): Train[] =>
  Array.from({ length: n }, (_, i) => ({
    id: `T${i + 1}`,
    type: ['Express', 'Freight', 'Local'][Math.floor(Math.random() * 3)],
    priority: Math.floor(Math.random() * 5) + 1,
    arrival: Math.random() * 60,
    speed: 60 + Math.random() * 60,
    pos: Math.floor(Math.random() * 5),
  }));

// Re-export stations so App.tsx can import from './data/trains'
export { stations };
