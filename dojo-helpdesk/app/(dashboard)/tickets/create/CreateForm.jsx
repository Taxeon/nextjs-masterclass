import SubmitButton from "@/app/Components/SubmitButton";
import { addTicket } from "../actions";

export default function CreateForm() {
	
	return (
		<form action={addTicket} className="w-1/2">
			<label>
				<span>Title:</span>
				<input
					name="Title"
					required
					type="text"
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					name="Body"
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select name="Priority">
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
			</label>
			<SubmitButton PendingText="Submitting..." />
		</form>
	);
}
