import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function ReservationCheckoutPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">Checkout</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Reservation summary, time slots, and payment will go here.
      </p>
      <p className="mt-8 text-sm space-x-4">
        <Link className="text-secondary hover:underline" to="/my-reservations">
          My reservations
        </Link>
        <Link className="text-secondary hover:underline" to="/discover">
          Discover
        </Link>
      </p>
    </PageContainer>
  );
}
