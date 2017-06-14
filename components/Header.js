import React, {Component} from 'react'

class Header extends Component{
  return render(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"><Link to="/">Home</Link></a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li> <Link to="/signUp"> Sign up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
