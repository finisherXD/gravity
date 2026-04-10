import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, MapPin, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CheckboxField } from '@/components/ui/CheckboxField';
import { TextField } from '@/components/ui/TextField';
import { usePasswordVisibility } from '@/features/auth/hooks/usePasswordVisibility';

type City = 'Damascus' | 'Aleppo' | 'Hama' | 'Homs';

const CITY_AREAS: Record<City, string[]> = {
  Damascus: [
    'Mezzeh',
    'Al Maliki',
    'Abu Rummaneh',
    'Muhajreen',
    'Kafr Souseh',
    'Rawda',
    'Shaalan',
    'Bab Touma',
    'Rukn al-Din',
  ],
  Aleppo: [
    'Aziziyah',
    'Suleimaniyah',
    'Al Jamiliyah',
    'Al Furqan',
    'New Aleppo',
    'Seif al-Dawla',
  ],
  Hama: [
    'Al Hader',
    'Al Baroudiyeh',
    'Al Hamidiyeh',
    'Masha al-Arbaeen',
    'Sharia',
  ],
  Homs: [
    'Al Waer',
    'Inshaat',
    'Karm al-Zeitoun',
    'Bab Amr',
    'Akrama',
    'Al Zahraa',
  ],
};

export function RegisterForm() {
  const [selectedCity, setSelectedCity] = useState<City | ''>('');
  const [selectedArea, setSelectedArea] = useState('');

  const { visible: showPassword, toggle: togglePassword } =
    usePasswordVisibility();
  const {
    visible: showConfirmPassword,
    toggle: toggleConfirmPassword,
  } = usePasswordVisibility();

  const areas: string[] = selectedCity ? CITY_AREAS[selectedCity] : [];

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <TextField
        id="username"
        label="Username"
        placeholder="gravityPilot"
        type="text"
        autoComplete="username"
        leftIcon={
          <User className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
      />

      <TextField
        id="email"
        label="Email"
        placeholder="commander@Gravity.com"
        type="email"
        autoComplete="email"
        leftIcon={
          <Mail className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
      />

      <TextField
        id="phone"
        label="Phone Number"
        placeholder="+963 ..."
        type="tel"
        autoComplete="tel"
        leftIcon={
          <Phone className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
      />

      <div className="space-y-2">
        <label htmlFor="city" className="block text-sm font-medium text-on-surface">
          City
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50 pointer-events-none" />
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => {
              const city = e.target.value as City | '';
              setSelectedCity(city);
              setSelectedArea('');
            }}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-container-highest border border-outline-variant/20 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
            autoComplete="address-level2"
          >
            <option value="">Select city</option>
            <option value="Damascus">Damascus</option>
            <option value="Aleppo">Aleppo</option>
            <option value="Hama">Hama</option>
            <option value="Homs">Homs</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="area" className="block text-sm font-medium text-on-surface">
          Area
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50 pointer-events-none" />
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            disabled={!selectedCity}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-container-highest border border-outline-variant/20 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            autoComplete="address-level3"
          >
            <option value="">
              {selectedCity ? 'Select area' : 'Choose city first'}
            </option>
            {areas.map((area: string) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TextField
        id="password"
        label="Password"
        placeholder="••••••••"
        type={showPassword ? 'text' : 'password'}
        autoComplete="new-password"
        leftIcon={
          <Lock className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
        rightSlot={
          <button
            type="button"
            onClick={togglePassword}
            className="text-on-surface-variant/50 hover:text-on-surface transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        }
      />

      <TextField
        id="confirmPassword"
        label="Confirm Password"
        placeholder="••••••••"
        type={showConfirmPassword ? 'text' : 'password'}
        autoComplete="new-password"
        leftIcon={
          <Lock className="text-on-surface-variant/50 w-5 h-5 group-focus-within:text-secondary transition-colors" />
        }
        rightSlot={
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="text-on-surface-variant/50 hover:text-on-surface transition-colors"
            aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            aria-pressed={showConfirmPassword}
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        }
      />

    

      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </form>
  );
}