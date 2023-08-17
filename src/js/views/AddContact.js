import React, { useState, useEffect, useContext } from "react"; // paso 1 importo el hook => useContext
import { Link } from "react-router-dom";

import { Context } from "../store/appContext"; // paso 2 importo el Contexto de => AppContext (hace toda la magia para llegar al flux)

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("a");
	const [email, setEmail] = useState("a");
	const [agendaSlug, setAgendaSlug] = useState("AAA");
	const [phone, setPhone] = useState("a");
	const [address, setAdress] = useState("a");

	// funcion agregar contacto, y ejecutarla con el submit
	//		dentro de la funcion hacemos el POST a la API

	// const nuevaAgenda = {
	// 	full_name: "Matias Borba",
	// 	email: "matiasborba89@gmail.com",
	// 	agenda_slug: "AAA",
	// 	address: "47568 NW 34ST, 33434 FL, USA",
	// 	phone: "7864445566"

	// 	nvm install 14.16.1
	//  npm run start

	// onSubmit={actions.agregarAgenda()} (agregarAgenda())

	const handleSubmit = () => {
		actions.agregarAgenda(fullName, email, agendaSlug, address, phone);
		//console.log("Contact added!");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>

						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={fullName}
							onChange={e => setFullName(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
							onChange={e => setAdress(e.target.value)}
						/>
					</div>

					<button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
						Save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
