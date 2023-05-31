import Link from "next/link"

const authLink = "https://auth.calendly.com/oauth/authorize?client_id=uoB6oI_BXqLz8yWmKInA9YZ4VLEAsbjuSU_BCl4pzhI&response_type=code&redirect_uri=https://dev.d2mgpjd3ipukhz.amplifyapp.com/"
const Page = () => {
  return <Link href={authLink}>iniciar sesion</Link>
}

export default Page
