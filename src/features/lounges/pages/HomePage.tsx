import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { mockLounges } from '@/data/mockLounges';

export function HomePage() {
  return (
    <PageContainer>
      <header className="mb-10">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Discover lounges
        </h1>
        <p className="mt-2 text-on-surface-variant text-sm">
          Browse venues and book a session. (Mock data — connect APIs next.)
        </p>
      </header>

      <ul className="space-y-3">
        {mockLounges.map((lounge) => (
          <li key={lounge.id}>
            <Link
              className="block rounded-lg border border-outline-variant/20 bg-surface-container-low px-4 py-3 hover:border-secondary/40 transition-colors"
              to={`/lounges/${lounge.id}`}
            >
              <span className="font-medium">{lounge.name}</span>
              <span className="text-on-surface-variant text-sm ml-2">
                {lounge.city}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {mockLounges.length === 0 ? (
        <p className="text-on-surface-variant text-sm mt-6">
          No lounges in mock data yet. Add entries in{' '}
          <code className="text-secondary">src/data/mockLounges.ts</code>.
        </p>
      ) : null}

      <p className="mt-10 text-sm text-on-surface-variant">
        <Link className="text-secondary hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </PageContainer>
  );
}
