import Loading from "@/app/components/Loading/Loading";
import Image from "next/image";
import Link from "next/link";

const SpecialistCard = ({ picture, name, specialty, id }) => {


  return (
    <>
      {picture ?
        <div className="specialists-card">
          <Image
            src={picture}
            width={500}
            height={500}
            alt="Foto de perfil del especialista"
            className='specialists-card-image'
          />
          <div>
            <Link href={`/specialist/${id}`} className="specialist-card-link"> {name}</Link>
            <p>{specialty}</p>
          </div>
        </div>
        :
        <Loading />
      }
    </>
  )
}

export default SpecialistCard