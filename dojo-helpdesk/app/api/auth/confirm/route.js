import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request) {
	const date = new Date();
	const showTime =
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	const { searchParams, origin } = new URL(request.url);

	const token_hash = searchParams.get("token_hash");
	const type = searchParams.get("type");
	const next = searchParams.get("next");
	const redirectTo = request.nextUrl.clone();

	redirectTo.pathname = next;
	redirectTo.searchParams.delete("token_hash");
	redirectTo.searchParams.delete("type");

	if (token_hash && type) {
		const supabase = createClient();

		const { error } = await supabase.auth.verifyOtp({
			type,
			token_hash,
		});
		console.log(error.message);

		if (!error) {
			redirectTo.searchParams.delete("next");

			//await supabase.auth.getUser();
			return NextResponse.redirect(origin);
		}
		redirect(`/login?error=${error.message}`);
		//redirectTo.pathname = `/login?error=${error.message}`;
	}

	// return the user to an error page with some instructions

	//return NextResponse.redirect(redirectTo);
}
