import Link from "next/link";
import Navbar from "../Components/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Authlayout({ children }) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.getUser();

	console.log(data)
	if (data.user){
		console.log('we are logged in')
		redirect('/')
	}

	return (
		<>
			<nav>
				<Link className="homelink" href="/">
					Dojo Helpdesk
				</Link>
			</nav>
			{children}
		</>
	);
}
