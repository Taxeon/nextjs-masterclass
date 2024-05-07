"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { TiDelete } from "react-icons/ti";
import { deleteTicket } from "../actions";

export default function DeleteButton({ id }) {
	const [isPending, startTransition] = useTransition();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleClick = async () => {
		setIsLoading(true);

		const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
			method: "DELETE",
		});
		const json = await res.json();

		if (json.error) {
			console.log(error);
			setIsLoading(false);
		}
		if (!json.error) {
			router.push("/tickets");
			router.refresh();
		}
	};
	return (
		<button
			className="btn-primary"
			onClick={() => startTransition(() => deleteTicket(id))}
			disabled={isPending}
		>
			{isPending && (
				<>
					<TiDelete />
					Deleting...
				</>
			)}

			{!isPending && (
				<>
					<TiDelete />
					Delete Ticket
				</>
			)}
		</button>
	);
}
