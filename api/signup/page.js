import { supabase } from "../../lib/supabase";

// signup function
export async function signUp(email, password, phone) {
  const { data: userData, error: userError } = await supabase
    .from("users")
    .insert([
      {
        email,
        password,
        phone,
      },
    ]);

  if (userError) {
    console.log("Error inserting user profile:", userError.message);
    return { data: null, error: userError };
  }

  return { data: { userData }, error: null };
}

// login function
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// logout function
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
