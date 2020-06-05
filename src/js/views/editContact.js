import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const editContact = props => {
	const { store, actions } = useContext(Context);
	const [editName, setName] = useState("");
	const [editPhone, setPhone] = useState("");
	const [editEmail, setEmail] = useState("");
	const [editAddress, setAdress] = useState("");
	console.log("editing", store.allContacts);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a existent contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							defaultValue={store.allContacts.full_name}
							onChange={e => setName(e.target.value)}
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={store.allContacts.email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={store.allContacts.phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={store.allContacts.address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContact(id, editName, editPhone, editEmail, editAddress);
							}}>
							Update changes
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

editContact.propTypes = {
	match: PropTypes.object
};
