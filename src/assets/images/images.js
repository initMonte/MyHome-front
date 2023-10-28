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
import BUTTON_BACK from './icons/button-back.svg';
import BUTTON_EDIT from './icons/button-edit.svg';
import BUTTON_SHARE from './icons/button-share.svg';
import HOME_PRIMARY from './icons/home-primary.svg';
import LENS_PRIMARY from './icons/lens-primary.svg';
import BED_PRIMARY from './icons/bed-primary.svg';
import SHOWER_PRIMARY from './icons/shower-primary.svg';
import RULER_PRIMARY from './icons/ruler-primary.svg';
import PARKING_PRIMARY from './icons/parking-primary.svg';
import CHECKBOX_PRIMARY from './icons/checkbox-primary.svg';

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
    BUTTON_BACK,
    BUTTON_EDIT,
    BUTTON_SHARE,
    LENS_PRIMARY,
    HOME_PRIMARY,
    BED_PRIMARY,
    RULER_PRIMARY,
    PARKING_PRIMARY,
    SHOWER_PRIMARY,
    CHECKBOX_PRIMARY,
  },
  OTHERS: {
    //IMAGEN_CUALQUIERA_EXCEPTO_SVG : require ('./backgrounds/imagen.webp') <-- asi se importa cualquier tipo de imagen que no sea SVG
    TEMPORAL_IMAGE: require('./icons/temporal_image.png'),
    TEMPORAL_IMAGE_LOGO: require('./icons/temporal_image_logo.png'),
  },
};
export default IMAGES;
