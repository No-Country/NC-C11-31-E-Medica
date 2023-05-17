import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faTooth, faHeartPulse, faPersonPregnant, faGlasses, faFaceSmileBeam, faBriefcaseMedical, faXRay } from '@fortawesome/free-solid-svg-icons'

export const CardSpecialties = ({ specielty }) => {
  const icons = {
    Cardiología: faHeartPulse,
    Odontología: faTooth,
    Traumatología: faXRay,
    Obstetricia: faPersonPregnant,
    Oftalmología: faGlasses,
    Dermatología: faFaceSmileBeam,
    Pediatría: faBaby,
    Cirugía: faBriefcaseMedical
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
