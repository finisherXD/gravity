import { Route, Routes } from 'react-router-dom';
import { AdminDashboardPage } from '@/features/admin/pages/AdminDashboardPage';
import { ForgotPasswordPage } from '@/features/auth/pages/ForgotPasswordPage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { RegisterPage } from '@/features/auth/pages/RegisterPage';
import { HomePage } from '@/features/lounges/pages/HomePage';
import { LoungeDetailPage } from '@/features/lounges/pages/LoungeDetailPage';
import { OwnerDashboardPage } from '@/features/owner/pages/OwnerDashboardPage';
import {
  MyReservationsPage,
} from '@/features/reservations/pages/MyReservationsPage';
import {
  ReservationCheckoutPage,
} from '@/features/reservations/pages/ReservationCheckoutPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/discover" element={<HomePage />} />
      <Route path="/lounges/:id" element={<LoungeDetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reservations/checkout" element={<ReservationCheckoutPage />} />
      <Route path="/my-reservations" element={<MyReservationsPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/owner" element={<OwnerDashboardPage />} />
    </Routes>
  );
}
