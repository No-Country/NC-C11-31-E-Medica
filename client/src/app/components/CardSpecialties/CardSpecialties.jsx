import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChildReaching, faBrain, faHandshakeAngle, faHandHoldingHeart, faDice,  faHeartPulse, faComments, faPersonPregnant, faFaceSmileBeam, faXRay, faNotesMedical, faHouseChimneyMedical, faPersonDress, faUsersLine, faPersonCane, faSuitcaseMedical} from '@fortawesome/free-solid-svg-icons'


export const CardSpecialties = ({ specielty }) => {
  const icons = {
    'Medicina General': faNotesMedical,
    'Medicina Interna': faHouseChimneyMedical,
    'Ginecología': faPersonDress,
    'Geriatría': faPersonCane,
    'Cardiología adulto': faHeartPulse,
    'Dermatología': faFaceSmileBeam,
    'Pediatría': faChildReaching,
    'Neurología adulto': faBrain,
    'Psicología adulto': faHandshakeAngle,
    'Psiquiatría adulto': faHandHoldingHeart,
    'Matrona': faPersonPregnant,
    'Cardiolología infantil': faHeartPulse,
    'Psicología infanto-juvenil': faDice,
    'Fonoaudiología': faComments
  }

  return (
    <div className='CardSpecialtiesContainer'>
      <FontAwesomeIcon className='CardSpecialtiesContainer-icon' icon={icons[specielty]} />
      <button>
        <h2>{specielty}</h2>
      </button>
    </div>
  )
}
