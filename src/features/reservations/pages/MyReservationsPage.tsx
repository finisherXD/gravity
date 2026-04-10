import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function MyReservationsPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">My reservations</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Past and upcoming bookings will be listed here.
      </p>
      <p className="mt-8 text-sm">
        <Link className="text-secondary hover:underline" to="/discover">
          Find a lounge
        </Link>
      </p>
    </PageContainer>
  );
}
