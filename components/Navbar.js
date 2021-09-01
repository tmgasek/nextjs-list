import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/people">
        <a>People</a>
      </Link>
    </nav>
  );
};

export default Navbar;
