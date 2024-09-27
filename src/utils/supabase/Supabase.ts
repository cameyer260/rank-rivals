import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL ||
        (() => {
            throw new Error("Supabase URL is undefined.");
        })(),
    process.env.SUPABASE_API_KEY ||
        (() => {
            throw new Error("Supabase api key is undefined.");
        })()
);
export default supabase;