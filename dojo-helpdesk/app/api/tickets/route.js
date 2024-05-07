import { NextResponse } from "next/server";

//component
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
	const ticket = await request.json();

	//get sb instance
	const supabase = createClient();

	//get the user sesssion
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// insert data to sb
	const { data, error } = await supabase
		.from("Tickets")
		.insert({
			Title: ticket.title,
			Body: ticket.body,
			Priority: ticket.priority,
			user_email: user.email,
		})
		.select()
		.single();

	console.log(data);
	return NextResponse.json({ data, error });
}
