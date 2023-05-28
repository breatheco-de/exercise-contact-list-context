import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions } = useContext(Context);

	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							onChange={event => setContact({ ...contact, full_name: event.target.value })}
							value={contact.full_name || ""}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onChange={event => setContact({ ...contact, email: event.target.value })}
							value={contact.email || ""}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onChange={event => setContact({ ...contact, phone: event.target.value })}
							value={contact.phone || ""}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onChange={event => setContact({ ...contact, address: event.target.value })}
							value={contact.address || ""}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						type="button"
						onClick={() => (contact.name != " " ? actions.newContact(contact) : () => {})}
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
