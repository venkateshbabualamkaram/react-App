
import './homepage.css';

export function HomePage() {
    return (
        <div className="container-fluid">
            <div className="landpage">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="#" className="navbar-brand">

                    <span className="ms-5 fs-3 h-1">PRO</span><span className="text-primary  fs-3 h-1">Lance</span>

                </a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav d-flex mx-auto mb-2 mb-lg-0 justify-content-between" >

                    <li className="nav-item">
                        <a href="#" className="nav-link me-5">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link me-5">explore jobs</a>
                    </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link me-5">find talent</a>
                        </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link me-5">how it works</a>
                    </li>
                </ul>
                    <div>
                <button className="btn btn-outline-light me-4 border-0">Sign In</button>
            <button className="btn btn-primary me-4">Join Now</button>
        </div>
    </div>
</nav>
            <div className="mini">
                    <div className="mini-container1">
                        <div className="child">

                        </div>
                        
                    </div>
                    <div className="mini-container2">
                     <div className="child">
                            
                    </div>
                        </div>
                </div>
            </div>
        </div>
    );
}