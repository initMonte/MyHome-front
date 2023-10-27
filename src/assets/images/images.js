import LOGO from './icons/logo.svg'; //<-- para importar cosas svg se hace asi
import GOOGLE from './icons/google.svg';
import GROUP from './icons/group.svg';
import SUCCESS from './icons/success.svg';
import FAV_BUTTON_ADDED from './icons/favButtonAdded.svg';
import FAV_BUTTON_NOT_ADDED from './icons/favButtonNotAdded.svg';
import DOOR from './icons/door.svg';
import SHOWER from './icons/shower.svg';
import BED from './icons/bed.svg';
import RULER from './icons/ruler.svg';
import DEPARTMENT from './icons/department.svg';
import HOME from './icons/home.svg';
import OFFICE from './icons/office.svg';
import TERRAIN from './icons/terrain.svg';
import PARKING from './icons/parking.svg';
import LOGOUT from './icons/logout.svg';
import MAIL from './icons/mail.svg';
import TRASH from './icons/trash.svg';
import USER from './icons/user.svg';
import HOME_HEART from './icons/home-heart.svg';
import STAR_FILL from './icons/star-fill.svg';
import QUINCHO from './icons/quincho.svg';
import SAUNA from './icons/sauna.svg';
import PILETA from './icons/pileta.svg';
import JACUZZI from './icons/jacuzzi.svg';
import JUEGO from './icons/juego.svg';
import ADD_IMAGE from './icons/add_image.svg';

const IMAGES = {
  SVG: {
    LOGO, //<-- la que importamos mas arriba
    GOOGLE,
    GROUP,
    SUCCESS,
    FAV_BUTTON_ADDED,
    FAV_BUTTON_NOT_ADDED,
    DOOR,
    SHOWER,
    BED,
    RULER,
    DEPARTMENT,
    HOME,
    OFFICE,
    TERRAIN,
    PARKING,
    LOGOUT,
    TRASH,
    USER,
    MAIL,
    HOME_HEART,
    STAR_FILL,
    QUINCHO,
    SAUNA,
    JACUZZI,
    JUEGO,
    PILETA,
    ADD_IMAGE,
  },
  OTHERS: {
    //IMAGEN_CUALQUIERA_EXCEPTO_SVG : require ('./backgrounds/imagen.webp') <-- asi se importa cualquier tipo de imagen que no sea SVG
    TEMPORAL_IMAGE: require('./icons/temporal_image.png'),
    TEMPORAL_IMAGE_LOGO: require('./icons/temporal_image_logo.png'),
  },
};
export default IMAGES;
