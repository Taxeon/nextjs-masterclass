export default function Error(SearchParams) {
  const errMsg = searchParams.error
	return (
		<main className="text-center">
			<h2 className="text-4xl">Doh! Well that was unexpected</h2>
			<p>{errMsg}</p>
			
		</main>
	);
}