import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

//components
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;
export async function generateMetadata({ params }) {
	const supabase = createClient();

	console.log(params.id);
	const { data: ticket, error } = await supabase
		.from("Tickets")
		.select()
		.eq("id", params.id)
		.single();

	console.log(ticket);
	return {
		title: `Dojo Helpdesk ${ticket?.title || "Ticket not found"}`,
	};
}

async function getTicket(id) {
	const supabase = createClient();

	const { data } = await supabase
		.from("Tickets")
		.select()
		.eq("id", id)
		.single();

	if (!data) {
		notFound();
	}
	return data;
}

export default async function TicketDetails({ params }) {
	const ticket = await getTicket(params.id);

	const supabase = createClient();
	const { data } = await supabase.auth.getUser();

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
				<div className="ml-auto">
					{data.user.email === ticket.user_email && (
						<DeleteButton id={ticket.id} />
					)}
				</div>
			</nav>

			<div className="card">
				<h3>{ticket.Title}</h3>
				<small>Created By {ticket.user_email}</small>
				<p>{ticket.Body}</p>
				<div className={`pill ${ticket.Priority}`}>
					{ticket.Priority} priority
				</div>
			</div>
		</main>
	);
}
