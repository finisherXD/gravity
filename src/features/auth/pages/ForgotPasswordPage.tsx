import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';

export function ForgotPasswordPage() {
  return (
    <PageContainer>
      <h1 className="font-headline text-3xl font-bold">Reset password</h1>
      <p className="mt-2 text-on-surface-variant text-sm">
        Forgot-password flow placeholder.
      </p>
      <p className="mt-8 text-sm">
        <Link className="text-secondary hover:underline" to="/login">
          Back to sign in
        </Link>
      </p>
    </PageContainer>
  );
}
