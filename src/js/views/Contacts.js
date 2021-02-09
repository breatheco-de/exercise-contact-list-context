import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { actions, store } = useContext(Context);
	const [selectUser, setSelectUser] = useState();
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<h1 className="title_List">My Contact List</h1>
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul>
						{store.contacts.map((user, index) => {
							return (
								<ContactCard
									show={state.showModal}
									onDelete={() => {
										setState({ showModal: true });
										setSelectUser(user);
										console.log(selectUser);
									}}
									onEdit={() => {
										store.user = user.id;
										console.log(store.user);
									}}
									key={index}
									id={user.id}
									name={user.full_name}
									email={user.email}
									phone={user.phone}
									address={user.address}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={selectUser} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
