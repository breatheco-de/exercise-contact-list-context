import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const EditModal = props => {
	const { actions } = useContext(Context);
	const [contact, setContact] = useState({
		id: props.item.id,
		full_name: props.item.full_name,
		email: props.item.email,
		phone: props.item.phone,
		address: props.item.address
	});

	const handleInputs = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	return (
		<div className="modal" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={props.onClose}></button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
						<label>Full Name</label>
						<input
							type="text"
							onChange={event => handleInputs(event)}
							value={contact.full_name || ""}
							className="form-control"
							placeholder="Full Name"
							name="full_name"
						/>
						<label>Email</label>
						<input
							type="email"
							onChange={event => handleInputs(event)}
							value={contact.email || ""}
							className="form-control"
							placeholder="Enter email"
							name="email"
						/>
						<label>Phone</label>
						<input
							type="phone"
							onChange={event => handleInputs(event)}
							value={contact.phone || ""}
							className="form-control"
							placeholder="Enter phone"
							name="phone"
						/>
						<label>Address</label>
						<input
							type="text"
							onChange={event => handleInputs(event)}
							value={contact.address || ""}
							className="form-control"
							placeholder="Enter address"
							name="address"
						/>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
							onClick={props.onClose}>
							Close
						</button>
						<button
                        
							type="button"
							className="btn btn-primary"
							onClick={() => {
								if (contact.full_name != " ") actions.editContact(contact);
								props.onClose();
							}}>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

EditModal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool,
	item: PropTypes.object
};