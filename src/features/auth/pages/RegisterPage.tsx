import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function RegisterPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">Create an account</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Registration UI will live here. Reuse{' '}
        <code className="text-secondary">AuthLayout</code> and shared fields
        when you build the form.
      </p>
      <p className="mt-8 text-sm">
        <Link className="text-secondary hover:underline" to="/login">
          Already have an account? Sign in
        </Link>
      </p>
    </PageContainer>
  );
}
