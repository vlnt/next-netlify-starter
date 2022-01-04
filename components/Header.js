import Link from 'next/link'

export default function Header({ title }) {
  return <header>
    <h1 className="title">{title}</h1><br/>
    <h2>Let's learn <span id='labelNext'><a href='https://nextjs.org'>Next.js</a></span></h2>
    <h4>Read {' '} 
        <Link href="/posts/first-post">
                <a>this page!</a>
        </Link>
      </h4>
  </header>
}
