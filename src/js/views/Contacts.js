import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import PropTypes from "prop-types";

export const Contacts = () => {
	const [state, setState] = useState({ showModal: false });
	const { store, actions } = useContext(Context);
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
						{store.allContacts.map((data, index) => {
							return (
								<ContactCard
									key={data.id}
									history={data}
									onDelete={() => {
										setState({ showModal: true });
									}}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

Contacts.propTypes = {
	history: PropTypes.any,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func
};
