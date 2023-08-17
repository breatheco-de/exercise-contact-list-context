import { withRouter } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react"; // paso 1 importo el hook => useContext
import { Context } from "../store/appContext"; // paso 2 importo el Contexto de => AppContext (hace toda la magia para llegar al flux)

import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		//initialize state here
	});

	useEffect(() => {
		console.log(props.contactito.id); // se lo hace directo en el modal
	}, []);

	//console.log("ESTOY EN CARDCONTACTSSSSSSS: ", store.contacts);
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.contactito.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.contactito.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.contactito.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.contactito.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
// VALIDA LOS DATOS QUE LE ESTOY PASANDO, en este caso del .map
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contactito: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	//contact: {},
	onDelete: null
};
