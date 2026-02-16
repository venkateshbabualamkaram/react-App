
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
        <section  className="write mt-5">
            <h3>Secure Collaboration <span className='para'>for the</span> Digital Economy</h3>
        </section>
        <div className="para1">
        <p>A transparent ,role-based marketplace connecting skilled professionals <br />with top clients.</p>
        </div>
            <div className="mini">
                    <div className="mini-container1">
                        <div className="child">
                            <section className='write'>
                                <h3 className='change'>I Want to Hire</h3>
                                <p className='para2'>post a job and find top talent that fits your needs.</p>
                            </section>
                            <div className='small'>
                                <section className='write'>
                                    <h3 className='change'>Post a Job</h3>
                                    <button className='btn btn-primary'>Post a Job</button>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="mini-container2">
                        <div className="child">
                        <section className='write'>
                                <h3 className='change'>I Want to <span className='text-success'>Work</span></h3>
                                <p className='para2'>Browse freelance opportunities to match your skillset</p>
                            </section>
                            <div className='small'>
                                <section className='write'>
                                    <h3 className='change'>Browse Jobs</h3>
                                    <button className='btn btn-primary'>Browse jobs</button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}