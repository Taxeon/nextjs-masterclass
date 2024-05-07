
import { login, signup } from "./actions";

export default function LoginPage({searchParams}) {
	const errMsg = searchParams.error
	console.log(errMsg)
	
	return (
		<form>
			<label>
				<span>Email:</span>
				<input
					id="email"
					name="email"
					type="email"
					//onChange={(e) => setEmail(e.target.value)}
					autoComplete="username"
					//value={email}
					required
				/>
			</label>
			<label>
				<span>Password:</span>
				<input
					id="password"
					name="password"
					type="password"
					//onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
					//value={password}
					required
				/>
			</label>
			<div className="linear">
				<button className="btn-primary" formAction={login}>
					Log in
				</button>

				<button className="btn-primary" formAction={signup}>
					Sign up
				</button>
           
			</div>
			{errMsg && <div className="error" >{errMsg}</div>   }
		</form>
		
	);
}
