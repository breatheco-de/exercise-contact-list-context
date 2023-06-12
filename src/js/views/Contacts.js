import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal.js";
import { ModalEdit } from "../component/ModalEdit.js";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.searchContact();
	}, []);

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
						{store.contacts.map((item, index) => (
							<ContactCard
								name={item.name}
								key={index}
								email={item.email}
								phone={item.phone}
								address={item.address}
								id={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
								edit={() => setEdit({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<ModalEdit show={edit.showModal} id={edit.id} onClose={() => setEdit({ showModal: false })} />
		</div>
	);
};
