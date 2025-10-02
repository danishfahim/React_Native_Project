import { supabase } from '@/lib/supabase';
import type { RegisterRequest } from './schemas';

export class AuthAPI {
  // Register new user (Signup)
  static async register({ email, password }: RegisterRequest) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return data;
  }
  // Login user
  static async login({ email, password }: RegisterRequest) {
    console.log("AuthAPI.login called with:", { email, password });

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Supabase login response:", { data, error });

    if (error) throw error;
    return data;
  }


  static async forgotPassword(email: string) {
    console.log("AuthAPI.forgotPassword called with:", email);

    const { data, error } = await supabase.auth.resetPasswordForEmail(
      email
    );
    console.log("Supabase forgotPassword response:", { data, error });

    if (error) throw error;
    return data;
  }
}
