import { Link, useParams } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { mockLounges } from '@/data/mockLounges';

export function LoungeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const lounge = mockLounges.find((l) => l.id === id);

  return (
    <PageContainer>
      <Link
        className="text-sm text-secondary hover:underline mb-6 inline-block"
        to="/discover"
      >
        ← Back to discovery
      </Link>
      {lounge ? (
        <>
          <h1 className="font-headline text-3xl font-bold">{lounge.name}</h1>
          <p className="text-on-surface-variant mt-2">{lounge.city}</p>
          {lounge.description ? (
            <p className="mt-6 text-sm leading-relaxed">{lounge.description}</p>
          ) : null}
          <Link
            className="mt-8 inline-flex rounded-lg bg-primary text-on-primary font-headline font-semibold px-5 py-3"
            to="/reservations/checkout"
          >
            Book a session
          </Link>
        </>
      ) : (
        <p className="text-on-surface-variant">
          Lounge not found.{' '}
          <Link className="text-secondary" to="/discover">
            Browse lounges
          </Link>
        </p>
      )}
    </PageContainer>
  );
}
