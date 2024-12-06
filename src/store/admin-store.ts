import { create } from 'zustand';

interface AdminState {
  isAuthenticated: boolean;
  admin: {
    id: string;
    email: string;
    name: string;
  } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  admin: null,
  login: (email, password) => {
    // In production, this would validate against a real backend
    if (email === 'admin@gymgpt.com' && password === 'admin123') {
      set({
        isAuthenticated: true,
        admin: {
          id: 'admin-1',
          email: 'admin@gymgpt.com',
          name: 'Admin User'
        }
      });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, admin: null })
}));