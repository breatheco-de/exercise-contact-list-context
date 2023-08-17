import React, { useState, useEffect, useContext } from "react"; // paso 1 importo el hook => useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // paso 2 importo el Contexto de => AppContext (hace toda la magia para llegar al flux)

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	//console.log("En Contacts.js, traigo:", useContext(Context));

	const [state, setState] = useState({ showModal: false });
	const { store, actions } = useContext(Context);

	//console.log("2: ", store.contacts);

	useEffect(() => {
		actions.obtenerInfo();
	}, []);

	useEffect(() => {
		//console.log("soy store.contacts: ", store.contacts);
	}, [store.contacts]);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{/* <ContactCard onDelete={() => setState({ showModal: true })} /> */}

						{store.contacts.map((item, index) => (
							<ContactCard key={index} contactito={item} />
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
