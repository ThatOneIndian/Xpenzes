import { create } from 'zustand';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthState {
  session: Session | null;
  isInitialized: boolean;
  hasProfile: boolean | null;
  setSession: (session: Session | null) => Promise<void>;
  setHasProfile: (status: boolean) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  isInitialized: false,
  hasProfile: null,
  
  setHasProfile: (status) => set({ hasProfile: status }),

  setSession: async (session) => {
    set({session}); 

    if (session) {
      const { data } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', session.user.id)
        .single();

      set({ hasProfile: !!data, isInitialized: true});
    } else {
      set({ hasProfile: false, isInitialized: true});
    }
  
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ session: null, hasProfile: false });
  },
}));