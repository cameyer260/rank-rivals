import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

export async function GET() {
    const session = await getServerSession(options);

    if(session) {
        return new Response(JSON.stringify({ message: "This is the protected content!" }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        return new Response(JSON.stringify({ message: "You must be signed in to view the protected content." }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}