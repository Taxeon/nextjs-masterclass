"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function login(formData) {
	const supabase = createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect(`/login?error=${error.message}`);
	}
	if (!error) {
		//revalidatePath('/', 'layout')
		redirect("/");
	}
}

export async function signup(formData) {
	const supabase = createClient();
	const headersList = headers();

	const { data, error } = await supabase.auth.signUp({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (error) {
		redirect(`/login?error=${error.message}`);
	}

	if (data) {
		//revalidatePath('/')
		redirect("/verify");
	}
}
