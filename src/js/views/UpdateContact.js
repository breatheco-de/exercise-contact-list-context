import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateContact = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.GetContactToUpdate(props);
	}, []);

	return (
		<div className="container">
			<div style={{ marginTop: "40px" }}>
				{!!store.alertUpdateContact && (
					<div className="row">
						<div className="col-12">
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Done!</strong> The contact information have change
								<button
									type="button"
									onClick={actions.clearNotifications}
									className="close"
									data-dismiss="alert"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				)}
				<h1 className="text-center mt-5">Modify contact</h1>
				<form onSubmit={e => actions.updateContact(e)} id={store.contact.id}>
					<div className="form-group">
						<label>New - Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full name"
							name="full_name"
							onChange={e => actions.handleContactInput(e)}
							value={store.contact.full_name || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							name="email"
							onChange={e => actions.handleContactInput(e)}
							value={store.contact.email || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Phone Number"
							name="phone"
							onChange={e => actions.handleContactInput(e)}
							value={store.contact.phone || ""}
						/>
					</div>
					<div className="form-group">
						<label>New - Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Address"
							name="address"
							onChange={e => actions.handleContactInput(e)}
							value={store.contact.address || ""}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						Apply Changes
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
