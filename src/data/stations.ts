export interface Station {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export const stations = [
  { id: 0, name: "Delhi", lat: 28.61, lng: 77.21 },
  { id: 1, name: "Agra", lat: 27.18, lng: 78.01 },
  { id: 2, name: "Gwalior", lat: 26.22, lng: 78.18 },
  { id: 3, name: "Bhopal", lat: 23.26, lng: 77.41 },
  { id: 4, name: "Mumbai", lat: 19.08, lng: 72.88 },
];
