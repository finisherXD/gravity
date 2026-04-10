import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function AdminDashboardPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">Admin dashboard</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Lounges, reservations, and user management will be scoped here.
      </p>
      <p className="mt-8 text-sm">
        <Link className="text-secondary hover:underline" to="/discover">
          Public site
        </Link>
      </p>
    </PageContainer>
  );
}
