import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getSupabase } from '../lib/supabase';

interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  age?: number;
  favorites?: string[];
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let supabase;
    try {
      supabase = getSupabase();
    } catch (error) {
      console.warn("Supabase initialization failed:", (error as Error).message);
      setLoading(false);
      return;
    }

    // Check active sessions and sets the user
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      handleSession(session);
    };

    getInitialSession();

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSession = async (session: Session | null) => {
    const user = session?.user ?? null;
    setUser(user);
    
    if (user) {
      try {
        const supabase = getSupabase();
        // Fetch or create profile
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error && error.code === 'PGRST116') {
          // Profile doesn't exist, create it
          const { data: newProfileData, error: createError } = await supabase
            .from('profiles')
            .insert([
              { 
                id: user.id, 
                email: user.email, 
                display_name: user.user_metadata.display_name || 'User',
                favorites: []
              }
            ])
            .select()
            .single();
          
          if (!createError && newProfileData) {
            setProfile({
              id: newProfileData.id,
              email: newProfileData.email,
              displayName: newProfileData.display_name,
              age: newProfileData.age,
              favorites: newProfileData.favorites,
              createdAt: newProfileData.created_at
            });
          }
        } else if (data) {
          setProfile({
            id: data.id,
            email: data.email,
            displayName: data.display_name,
            age: data.age,
            favorites: data.favorites,
            createdAt: data.created_at
          });
        }
      } catch (err) {
        console.error("Profile sync error:", err);
      }
    } else {
      setProfile(null);
    }
    setLoading(false);
  };

  const logout = async () => {
    try {
      const supabase = getSupabase();
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    profile,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
