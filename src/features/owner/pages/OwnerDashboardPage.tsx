import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function OwnerDashboardPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">Owner dashboard</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Stations, schedules, and owner-facing reservations belong here.
      </p>
      <p className="mt-8 text-sm">
        <Link className="text-secondary hover:underline" to="/discover">
          Public site
        </Link>
      </p>
    </PageContainer>
  );
}
