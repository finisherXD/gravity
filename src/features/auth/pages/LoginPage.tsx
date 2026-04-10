import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Card } from '@/components/ui/Card';
import { AuthDivider } from '@/features/auth/components/AuthDivider';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { LoginHero } from '@/features/auth/components/LoginHero';
import { LoginSystemStatus } from '@/features/auth/components/LoginSystemStatus';
import { SocialAuthButtons } from '@/features/auth/components/SocialAuthButtons';

export function LoginPage() {
  return (
    <AuthLayout>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md z-10"
      >
        <Card>
          <LoginHero />
          <LoginForm />
          <AuthDivider label="Identity Verification" />
          <SocialAuthButtons />
          <div className="mt-10 text-center">
            <p className="text-on-surface-variant text-sm">
              New to the lounge?
              <Link
                className="text-primary font-bold ml-1 hover:underline underline-offset-4 decoration-primary/30"
                to="/register"
              >
                Create an account
              </Link>
            </p>
          </div>
        </Card>
        <LoginSystemStatus />
      </motion.main>
    </AuthLayout>
  );
}
