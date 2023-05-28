import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import propTypes from "prop-types";
import { Modal } from "../component/Modal";
import { EditModal } from "./EditModal";

export const ContactCard = props => {
	const [showModal, setShowModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={() => setEditModal(true)}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => setShowModal(true)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.item.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.item.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.item.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.item.email}</span>
				</div>
			</div>
			<Modal show={showModal} onClose={() => setShowModal(false)} item={props.item} />
			<EditModal show={editModal} onClose={() => setEditModal(false)} item={props.item} />
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	item: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
