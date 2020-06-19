import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext } from "react";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div style={{ marginTop: "40px" }}>
				{!!store.alertCreateNewContact && (
					<div className="row">
						<div className="col-12">
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Done!</strong> New contact created
								<button
									onClick={actions.clearNotifications}
									type="button"
									className="close"
									data-dismiss="alert"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<h1 className="text-center mt-5">Add a new contact</h1>
			<form id="createContact" onSubmit={e => actions.createNewContact(e)}>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Full Name"
						name="full_name"
						onChange={e => actions.handleContactInput(e)}
					/>
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						onChange={e => actions.handleContactInput(e)}
					/>
				</div>

				<div className="form-group">
					<label>Phone</label>
					<input
						type="phone"
						className="form-control"
						placeholder="Enter phone"
						name="phone"
						onChange={e => actions.handleContactInput(e)}
					/>
				</div>

				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter address"
						name="address"
						onChange={e => actions.handleContactInput(e)}
					/>
				</div>

				<button type="submit" className="btn btn-primary form-control">
					save
				</button>

				<Link className="mt-3 w-100 text-center" to="/">
					get back to contacts
				</Link>
			</form>
		</div>
	);
};
