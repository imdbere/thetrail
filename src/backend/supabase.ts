import { Database } from "@/backend/types/supabase";
import { createClient } from "@supabase/supabase-js";

// This one has admin privileges (can read and write whole DB) and can only be used on the server
export function getServerComponentClient() {
  if (!process.env.SUPABASE_SECRET_KEY) {
    throw new Error(
      "You need to setup SUPABASE_SECRET_KEY first (check .env.local)"
    );
  }
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SECRET_KEY as string
  );
}

// This one has Row Level Security enabled and can safely be used on the client
export function getClientComponentClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
}
