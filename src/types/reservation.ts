export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export type Reservation = {
  id: string;
  loungeId: string;
  userId: string;
  startAt: string;
  endAt: string;
  status: ReservationStatus;
};
