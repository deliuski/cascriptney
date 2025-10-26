import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const formData = await request.formData();
        const username = formData.get("username")?.toString();
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();

        if (!username || !email || !password) {
            return new Response("Username, email, and password are required", { status: 400 });
        }

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name: username } },
        });

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return redirect("/login");
    } catch (err) {
        console.error(err);
        return new Response("Server error", { status: 500 });
    }
};
