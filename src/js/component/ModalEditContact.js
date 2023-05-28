import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalEditContact = props => {
	const { actions } = useContext(Context);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});

	return (
		<div className="modal" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Update the contact</h5>
						<button type="button" onClick={() => props.onClose()} className="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									value={contact.name || ""}
									onChange={event => setContact({ ...contact, name: event.target.value })}
									className="form-control"
									placeholder="Full Name"
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									value={contact.email || ""}
									onChange={event => setContact({ ...contact, email: event.target.value })}
									className="form-control"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									value={contact.phone || ""}
									onChange={event => setContact({ ...contact, phone: event.target.value })}
									className="form-control"
									placeholder="Enter phone"
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									value={contact.address || ""}
									onChange={event => setContact({ ...contact, address: event.target.value })}
									className="form-control"
									placeholder="Enter address"
								/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							onClick={() => props.onClose()}
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Cancel
						</button>
						<button
							type="button"
							onClick={() => {
								contact.name != "" ? actions.editContact(contact, props.item.id) : () => {};
								props.onClose();
							}}
							className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalEditContact.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	item: PropTypes.object
};

ModalEditContact.defaultProps = {
	show: false,
	onClose: null
};
