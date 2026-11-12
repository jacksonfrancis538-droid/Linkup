import { createBrowserClient } from "@supabase/ssr";
export function createClient(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)throw new Error("LINKUP is still connecting to its database. Please try again shortly.");return createBrowserClient(url,key);}
