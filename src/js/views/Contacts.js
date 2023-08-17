import React, { useState, useEffect, useContext } from "react"; // paso 1 importo el hook => useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // paso 2 importo el Contexto de => AppContext (hace toda la magia para llegar al flux)

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	//console.log("En Contacts.js, traigo:", useContext(Context));

	const [state, setState] = useState({ showModal: false, id: undefined }); // state.id para acceder al id. Esto es un mini objeto
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

						{/* aparte de enviar el objeto a contactcard, le mandamos tambien el estado del modal y aparte de eso la id por si queremos eliminarlo */}
						{store.contacts.map((item, index) => (
							<ContactCard
								key={index}
								contactito={item}
								onDelete={() => setState({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			{/* si hago click en papelera, cambia estado y se ve el modal */}
			<Modal show={state.showModal} idModalcito={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
