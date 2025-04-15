import React, { useState } from "react";

const FormulaireAudio = () => {
	const [sent, setSent] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = new URLSearchParams(formData);
		await fetch("https://hook.eu2.make.com/xo5g1g756x9j1hmbos4mxwrw8gtchfuk", {
			method: "POST",
			body: data
		});
		setSent(true);
	};

	return <form onSubmit={handleSubmit} style={{
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		maxWidth: "400px"
	}}>
		      
		<input
			type="text"
			name="nom"
			placeholder="Votre nom"
			required
			style={{
				padding: "0.5rem",
				fontSize: "1rem"
			}}
		/>
		      
		<input
			type="email"
			name="email"
			placeholder="Votre email"
			required
			style={{
				padding: "0.5rem",
				fontSize: "1rem"
			}}
		/>
		      
		<textarea
			name="prompt"
			placeholder="Décrivez votre projet audio..."
			required
			rows="5"
			style={{
				padding: "0.5rem",
				fontSize: "1rem"
			}}
		></textarea>
		      
		<button type="submit" disabled={sent} style={{
			backgroundColor: sent ? "#28a745" : "#000",
			color: "#fff",
			padding: "0.75rem",
			border: "none",
			cursor: sent ? "default" : "pointer",
			fontWeight: "bold",
			fontSize: "1rem"
		}}>
			        
			{sent ? "✔ Envoyé" : "Envoyer"}
			      
		</button>
		    
	</form>;
};

export default FormulaireAudio;