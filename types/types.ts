export interface NewTourType {
  title: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
}

export interface TourType {
  id: number
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
}

export interface EditedTourType {
  id: string
  title: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
}


