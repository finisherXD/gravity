import { Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GOOGLE_SIGN_IN_ICON_URL } from '@/lib/constants';

export function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="social" type="button">
        <img
          src={GOOGLE_SIGN_IN_ICON_URL}
          alt="Google"
          className="w-5 h-5"
          referrerPolicy="no-referrer"
        />
        <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
          Google
        </span>
      </Button>
      <Button variant="socialSteam" type="button">
        <Gamepad2 className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface transition-colors" />
        <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
          Steam
        </span>
      </Button>
    </div>
  );
}
