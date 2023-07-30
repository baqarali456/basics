import React from 'react'

export default function Navabar({mode,ontogglemode,bntText,mystyle}) {
  return (
    <nav style={mystyle} className={`navbar navbar-expand-lg bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" style={mystyle} href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={mystyle} className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={mystyle} href="/">Link</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>ontogglemode()} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{bntText}</label>
</div>
    </div>
  </div>
</nav>
  )
}
