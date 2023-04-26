import {Link, useMatch, useResolvedPath} from 'react-router-dom'


import './Navbar.css';


function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>TiTLE
                    </Link>


                    <ul className='nav-item'>
                        <li >
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <CustomLink to='/about' className='nav-links' >
                                About
                            </CustomLink></li>
                           <li> <CustomLink to='/contactpage' className='nav-links'>
                                Contact
                            </CustomLink></li>
                        
                    </ul>

                </div>

            </nav>
            
        </>
        
    )
}
function CustomLink({to, children, ...props }){
    const resolvedPath= useResolvedPath(to)
     const isActive=useMatch({path:resolvedPath.pathname, end:true})
      return(
     <li className={isActive? "active" :""}>
         <Link to={to} {...props}>
         {children}
         </Link>
     </li>
 )
 }

export default Navbar