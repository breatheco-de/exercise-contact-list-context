import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { data } from "jquery";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const [full_name, setFullName] = useState(props.location.data.full_name);
	const [email, setEmail] = useState(props.location.data.email);
	const [phone, setPhone] = useState(props.location.data.phone);
	const [address, setAddress] = useState(props.location.data.address);
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
							value={full_name}
							onChange={e => setFullName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							if (props.location.data.accion == "Crear") {
								actions.addContact({
									full_name: full_name,
									email: email,
									phone: phone,
									address: address
								});
							} else {
								actions.updateContact({
									full_name: full_name,
									email: email,
									phone: phone,
									address: address,
									id: props.location.data.id
								});
							}
						}}>
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

AddContact.propTypes = {
	location: PropTypes.object
};
