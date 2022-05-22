import { NavLink } from 'react-router-dom';
import './Navigation.module.scss';
export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? 'active_link link' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? 'active_link link' : 'link')}
      >
        Movie
      </NavLink>
    </nav>
  );
}
