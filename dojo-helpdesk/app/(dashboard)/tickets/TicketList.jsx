import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function getTickets() {
	const supabase = createClient();
	const { data, error } = await supabase.from("Tickets").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function TicketList() {
	const tickets = await getTickets();

	return (
		<>
			{tickets.map((ticket) => (
				<div key={ticket.id} className="card my-5">
					<Link href={`/tickets/${ticket.id}`}>
						<h3>{ticket.Title}</h3>
						<p>{ticket.Body.slice(0, 200)}...</p>
						<div className={`pill ${ticket.Priority}`}>
							{ticket.Priority} priority
						</div>
					</Link>
				</div>
			))}
			{tickets.length === 0 && (
				<p className="text-center">There are no open tickets, yay!</p>
			)}
		</>
	);
}
