import React, { useEffect, useState } from "react";
import atomize from "@quarkly/atomize";

const Embedvote = () => {
	const [propositions, setPropositions] = useState([]);
	const [filtreMood, setFiltreMood] = useState("");
	const [recherche, setRecherche] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch("https://n8n-w65x.onrender.com/webhook/146eff52-2c68-43e3-aff5-6bfe2b7bbcec").then(res => res.json()).then(data => {
			if (Array.isArray(data)) {
				setPropositions(data);
			} else if (Array.isArray(data.data)) {
				setPropositions(data.data);
			} else {
				console.error("Format inattendu :", data);
				setPropositions([]);
			}

			setIsLoading(false);
		}).catch(err => {
			console.error("Erreur de chargement :", err);
			setError("Erreur lors du chargement des données");
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div style={{
			padding: "2rem",
			textAlign: "center",
			color: "#fff",
			backgroundColor: "#000",
			height: "100vh"
		}}>
			        
			<p style={{
				fontSize: "1.2rem"
			}}>
				Chargement des sons...
			</p>
			        
			<div style={{
				width: "40px",
				height: "40px",
				margin: "1rem auto",
				border: "4px solid #ccc",
				borderTop: "4px solid #fff",
				borderRadius: "50%",
				animation: "spin 1s linear infinite"
			}} />
			        
			<style>
				          
				{`@keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }`}
				        
			</style>
			      
		</div>;
	}

	if (error) {
		return <div style={{
			padding: "2rem",
			textAlign: "center",
			color: "#ff6b6b",
			backgroundColor: "#000",
			height: "100vh"
		}}>
			        
			<p>
				{error}
			</p>
			      
		</div>;
	}

	const vote = async id => {
		// ATTENTION: Remplacez cette URL par votre vraie URL de webhook
		const res = await fetch("https://VOTRE-VRAIE-URL-N8N.webhook-url/vote", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id
			})
		});

		if (res.ok) {
			setPropositions(prev => prev.map(p => p.id === id ? { ...p,
				votes: (p.votes || 0) + 1
			} : p));
		} else {
			alert("Erreur lors du vote.");
		}
	};

	const filtrer = p => {
		const moodMatch = !filtreMood || (p.mood || "").toLowerCase() === filtreMood;
		const searchMatch = (p.artist + " " + p.title).toLowerCase().includes(recherche.toLowerCase());
		return moodMatch && searchMatch;
	};

	const extraireIDYoutube = url => {
		const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
		return match ? match[1] : "";
	};

	const sorted = [...propositions.filter(filtrer)].sort((a, b) => (b.votes || 0) - (a.votes || 0));
	return <div style={{
		padding: "2rem",
		color: "#fff",
		backgroundColor: "#000"
	}}>
		      
		<div style={{
			marginBottom: "1rem"
		}}>
			        
			<label style={{
				marginRight: "0.5rem"
			}}>
				Mood :
			</label>
			        
			<select onChange={e => setFiltreMood(e.target.value)}>
				          
				<option value="">
					Tous
				</option>
				          
				<option value="joie">
					Joie
				</option>
				          
				<option value="tristesse">
					Tristesse
				</option>
				          
				<option value="colère">
					Colère
				</option>
				          
				<option value="sérénité">
					Sérénité
				</option>
				          
				<option value="énergie">
					Énergie
				</option>
				        
			</select>
			        
			<input type="text" placeholder="Rechercher artiste/titre" onChange={e => setRecherche(e.target.value)} style={{
				marginLeft: "1rem",
				padding: "4px 8px"
			}} />
			      
		</div>
		      
		<div style={{
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
			columnGap: "1.5rem",
			rowGap: "2.5rem"
		}}>
			        
			{sorted.map(p => <div key={p.id} style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				border: "1px solid #222",
				backgroundColor: "#161616",
				// Une seule déclaration
				boxShadow: "0 0 0 1px #2a2a2a inset, 0 2px 6px rgba(0,0,0,0.8)",
				padding: "1rem",
				borderRadius: "8px",
				transition: "transform 0.2s ease, box-shadow 0.2s ease",
				cursor: "pointer",
				height: "100%"
			}} onMouseEnter={e => {
				e.currentTarget.style.transform = "scale(1.03)";
				e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,255,255,0.2)";
			}} onMouseLeave={e => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.5)";
			}}>
				            
				<div>
					              
					<h3 style={{
						color: "#fff",
						fontSize: "1rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						minHeight: "2.6em",
						maxHeight: "2.6em",
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical"
					}}>
						                
						{p.artist}
						 – 
						{p.title}
						              
					</h3>
					              
					<iframe
						width="100%"
						style={{
							aspectRatio: "1 / 1",
							width: "100%",
							borderRadius: "8px"
						}}
						src={`https://www.youtube.com/embed/${extraireIDYoutube(p.youtube)}`}
						frameBorder="0"
						allowFullScreen
						title={p.title}
					/>
					              
					<p>
						                
						<strong>
							Mood :
						</strong>
						 
						{p.mood || "Non précisé"}
						 |{" "}                
						<strong>
							Votes :
						</strong>
						 
						{p.votes || 0}
						              
					</p>
					            
				</div>
				            
				<div style={{
					marginTop: "auto",
					textAlign: "center"
				}}>
					              
					<button onClick={() => vote(p.id)} style={{
						padding: "8px 12px",
						backgroundColor: "#fff",
						color: "#000",
						border: "none",
						borderRadius: "6px",
						cursor: "pointer"
					}}>
						                Voter 👍
              
					</button>
					            
				</div>
				          
			</div>)}
			      
		</div>
		    
	</div>;
};

export default atomize(Embedvote)({
	name: "Embedvote",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Embedvote — affiche les sons proposés et permet de voter"
	},
	propInfo: {}
});