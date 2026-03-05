import { create } from 'zustand';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthState {
  session: Session | null;
  isInitialized: boolean;
  setSession: (session: Session | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  isInitialized: false,
  
  setSession: (session) => set({ session, isInitialized: true }),
  
  signOut: async () => {
    await supabase.auth.signOut();
    set({ session: null });
  },
}));