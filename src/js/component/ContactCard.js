import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { AddContact } from "../views/AddContact.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const dataModif = {
		full_name: props.data.full_name,
		email: props.data.email,
		phone: props.data.phone,
		address: props.data.address,
		id: props.data.id,
		accion: "Modificar"
	};
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<Link
								className="fas fa-pencil-alt mr-3"
								to={{
									pathname: "/edit",
									data: dataModif
								}}
							/>
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.data.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.data.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.data.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.data.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	data: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
