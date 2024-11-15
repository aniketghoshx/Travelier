export interface NewTourType {
  title: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
}

export interface TourType {
  id: number;
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
}

export interface EditedTourType {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
}

export interface BookingDetailsType {
  userId: number;
  tourId: number;
  amount: number;
  noOfTraveler: number;
  bookingDate: string;
}

export interface BookingTypes {
  id: number;
  userId: number;
  tourId: number;
  amount: number;
  noOfTraveler: number;
  status: string;
  bookingDate: string;
  createdAt: Date;
  tour: {
    id: number;
    title: string;
    duration: number;
    price: number;
    description: string;
    destination: string;
    isActive: boolean;
  };
}
