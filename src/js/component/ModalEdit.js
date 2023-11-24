import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalEdit = props => {
	const [edit, setEdit] = useState({});

	const { actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit the contact information</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<form>
						<div className="form-group">
							<label> Full Name </label>{" "}
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={e => setFullName(e.target.value)}
								value={fullName}
							/>
						</div>
						<div className="form-group">
							<label> Email </label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className="form-group">
							<label> Phone </label>
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
								value={phone}
							/>
						</div>
						<div className="form-group">
							<label> Address </label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
								value={address}
							/>
						</div>
					</form>
					<div className="modal-footer">
						<button type="submit" className="btn btn-primary form-control">
							save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string,
	onSubmit: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
