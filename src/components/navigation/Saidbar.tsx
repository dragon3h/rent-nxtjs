import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/store'>Store</Link>
        </li>
        <li>Settings</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
