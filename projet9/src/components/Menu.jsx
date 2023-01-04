import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <header className="menu">
        <NavLink to="/" end className="box_logo">
          <p className="header_logo"></p>
        </NavLink>
        <nav className="box_nav">
          <ul>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/`}
                end
                className={({ isActive }) =>
                  isActive ? 'activeLink' : undefined
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/Apropos`}
                className={({ isActive }) =>
                  isActive ? 'activeLink' : undefined
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
