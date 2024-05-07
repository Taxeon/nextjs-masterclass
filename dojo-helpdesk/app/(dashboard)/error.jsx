"use client";

export default function Error({ error, reset }) {
	return (
		<main className="text-center">
			<h2 className="text-4xl">Doh! Well that was unexpected</h2>
			<p>{error.message}</p>
			<button onClick={reset} className="btn-primary mx-auto my-4">
				If Error repeats we have a problem.
			</button>
		</main>
	);
}
