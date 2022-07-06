import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
};

export default Header;
