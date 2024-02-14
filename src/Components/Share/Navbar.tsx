import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-5 bg-cyan-300 font-extrabold text-lg">
      <nav className="flex items-start justify-center gap-6">
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/videos">Videos</NavLink>
      </nav>
    </div>
  );
}
