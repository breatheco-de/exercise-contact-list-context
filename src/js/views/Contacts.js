import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

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
						{store.AllContacts.length > 0 &&
							store.AllContacts.map((item, i) => {
								return (
									<ContactCard
										key={i}
										id={item.id}
										name={item.full_name}
										email={item.email}
										address={item.address}
										phone={item.phone}
									/>
								);
							})}
					</ul>
				</div>
			</div>
			{/*<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />*/}
		</div>
	);
};
