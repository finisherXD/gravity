import { AtSign, Eye, EyeOff, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { CheckboxField } from '@/components/ui/CheckboxField';
import { TextField } from '@/components/ui/TextField';
import { usePasswordVisibility } from '@/features/auth/hooks/usePasswordVisibility';

export function LoginForm() {
  const { visible: showPassword, toggle: togglePassword } =
    usePasswordVisibility();

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <TextField
        id="identifier"
        label="Email or Username"
        placeholder="commander@voidlounge.com"
        type="text"
        autoComplete="username"
        leftIcon={
          <AtSign className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
      />

      <TextField
        id="password"
        label="Password"
        placeholder="••••••••"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        labelAction={
          <Link
            className="text-xs font-medium text-secondary hover:text-secondary/80 transition-colors"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        }
        leftIcon={
          <Lock className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
        rightSlot={
          <button
            type="button"
            onClick={togglePassword}
            className="text-on-surface-variant/50 hover:text-on-surface transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        }
      />

      <CheckboxField id="remember" label="Stay logged in for 30 days" />

      <Button variant="primary" type="submit">
        Initiate Login
      </Button>
    </form>
  );
}
