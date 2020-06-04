import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const createContact = store.createContact;

	const [fullName, setName] = useState();
	const [email, setEmail] = useState();
	const [address, setAddress] = useState();
	const [phone, setPhone] = useState();

	createContact.full_name = fullName;
	createContact.email = email;
	createContact.address = address;
	createContact.phone = phone;

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
							onChange={() => setName(event.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={() => setEmail(event.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={() => setPhone(event.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={() => setAddress(event.target.value)}
							required
						/>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.createContact(createContact)}>
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
