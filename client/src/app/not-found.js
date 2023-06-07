import Link from 'next/link';
import "./styles/not-found.css"
export default function NotFound() {
  return (
    <div className='container-404'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}