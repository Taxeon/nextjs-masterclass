import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

//components
import Navbar from "../Components/Navbar";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboardlayout({ children }) {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();

	console.log('LayoutPage')
	console.log(data)
	if (!data.user){
		redirect('/login')
	}

	//	const {data } = await supabase.auth.getSession()
	return (
		<>
			<Navbar user={data.user} />
			{children}
		</>
	);
}
