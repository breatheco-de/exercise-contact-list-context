import React, { useState, useEffect, useContext } from "react"; // paso 1 importo el hook => useContext
import { Context } from "../store/appContext"; // paso 2 importo el Contexto de => AppContext (hace toda la magia para llegar al flux)

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const ModalModifyContact = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});

	//form
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [agendaSlug, setAgendaSlug] = useState("AAA");
	const [phone, setPhone] = useState("");
	const [address, setAdress] = useState("");

	const handleModify = (fullName, email, agendaSlug, address, phone, id) => {
		//actions.actualizarContacto(fullName, email, agendaSlug, address, phone, id)
		console.log("toy en el modal de modificar: ", props.modifyContactModalcito);
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Confirma modificar estos campos wachin ??</h5>
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

					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>

								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									value={fullName}
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
									onChange={e => setAdress(e.target.value)}
								/>
							</div>
						</form>
					</div>

					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							creo que no!
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModify}>
							sabelo!
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
ModalModifyContact.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	modifyContactModalcito: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalModifyContact.defaultProps = {
	show: false,
	onClose: null
};
