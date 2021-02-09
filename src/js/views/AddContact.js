import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions, store } = useContext(Context);
	const [data, setData] = useState({
		email: "",
		phone: "",
		name: "",
		address: ""
	});
	const inputChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="name"
							type="text"
							onChange={inputChange}
							className="form-control"
							placeholder="Full Name"
							defaultValue={store.user ? store.user.full_name : ""}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							onChange={inputChange}
							className="form-control"
							placeholder="Enter email"
							defaultValue={store.user ? store.user.email : ""}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="phone"
							onChange={inputChange}
							className="form-control"
							placeholder="Enter phone"
							defaultValue={store.user ? store.user.phone : ""}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							onChange={inputChange}
							className="form-control"
							placeholder="Enter address"
							defaultValue={store.user ? store.user.address : ""}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								store.user ? actions.editContact(store.user, data) : actions.createContact(data);
							}}>
							save
						</button>
					</Link>
					<Link
						className="mt-3 w-100 text-center"
						to="/"
						onClick={() => {
							actions.setUser("");
						}}>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
