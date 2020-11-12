import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});
	const dataCreate = {
		full_name: "",
		email: "",
		phone: "",
		address: "",
		accion: "Crear"
	};

	React.useEffect(() => {
		actions.fetchcontactlist();
		return;
	}, []);
	return (
		<div className="container">
			Contacts
			<div>
				<p className="text-right my-3">
					<Link
						className="btn btn-success"
						to={{
							pathname: "/add",
							data: dataCreate
						}}>
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactlist.map((item, index) => {
							return (
								<ContactCard
									key={index}
									onDelete={() => setState({ showModal: true, idToDelete: item.id })}
									data={item}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				idToDelete={state.idToDelete}
				onClose={() => setState({ showModal: false })}
			/>
		</div>
	);
};
