import { NextResponse, NextRequest } from "next/server";
import { createClient } from "./server";


export async function updateSession(request) {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				get(name) {
					return request.cookies.get(name)?.value;
				},
				set(name, value, options) {
					request.cookies.set({
						name,
						value,
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value,
						...options,
					});
				},
				remove(name, options) {
					request.cookies.set({
						name,
						value: "",
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value: "",
						...options,
					});
				},
			},
		}
	);
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	return response;
}
