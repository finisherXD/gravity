import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Card } from '@/components/ui/Card';
import { AuthDivider } from '@/features/auth/components/AuthDivider';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { RegisterHero } from '@/features/auth/components/RegisterHero';
import { LoginSystemStatus } from '@/features/auth/components/LoginSystemStatus';
import { SocialAuthButtons } from '@/features/auth/components/SocialAuthButtons';

export function RegisterPage() {
  return (
    <AuthLayout>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md z-10"
      >
        <Card>
          <RegisterHero />
          <RegisterForm />
          <AuthDivider label="Identity Verification" />
        
          <div className="mt-10 text-center">
            <p className="text-on-surface-variant text-sm">
              Already have an account?
              <Link
                className="text-primary font-bold ml-1 hover:underline underline-offset-4 decoration-primary/30"
                to="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
        <LoginSystemStatus />
      </motion.main>
    </AuthLayout>
  );
}
