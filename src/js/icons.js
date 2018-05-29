/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';


/**
 * 2) Then you have to import every icon that you will use
*/
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/
fontawesome.config = {
  autoReplaceSvg: 'nest'
};

/**
 * 4) Add the icons into the font-awesome library
*/
fontawesome.library.add(
    faMapMarkerAlt, faPhone, faEnvelope, faPencilAlt, faTrashAlt
);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i class="fas fa-check"></i>
*/