import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const createSupabaseClient = async () => {
    const session = await getServerSession(authOptions);
    const supabaseAccessToken = session?.supabaseAccessToken;

    if (!process.env.SUPABASE_URL) {
        throw new Error("Supabase URL is undefined.");
    }
    if (!process.env.SUPABASE_API_KEY) {
        throw new Error("Supabase API key is undefined.");
    }

    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_API_KEY,
        {
            global: {
                headers: {
                    Authorization: `Bearer ${supabaseAccessToken}`,
                },
            },
        }
    );

    return supabase;
};

export default createSupabaseClient;