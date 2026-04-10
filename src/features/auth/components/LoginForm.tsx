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
        placeholder="commander@Gravity.com"
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

      <CheckboxField id="remember" label="Remember me" />

      <Button variant="primary" type="submit">
        Initiate Login
      </Button>
    </form>
  );
}
