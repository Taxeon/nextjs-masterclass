import { Suspense } from "react";
import TicketList from "./ticketlist";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
	title: "Dojo Helpdesk | Tickets",
};
export default function tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets</small>
					</p>
				</div>
				<Link href="tickets/create" className="ml-auto">
					<button className="btn-primary">New Ticket</button>
				</Link>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
}
