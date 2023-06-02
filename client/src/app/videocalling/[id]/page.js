import VideoCalling from "@/app/components/Videocalling/VideoCalling";
function page({ params }) {
  return <VideoCalling appointmentId={params.id} />;
}

export default page;
