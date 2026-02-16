import { Formik, Field, ErrorMessage, Form } from "formik"; // Added Form
import * as Yup from "yup";

export function LoginComponent() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("name is required")
            .min(8, "name must be at least 8 characters")
            .max(10, "name must be at most 10 characters"),
        email: Yup.string()
            .email("invalid email")
            .required("email is required"),
        password: Yup.string()
            .required("password is required")
    });

    return (
        <div className="container-fluid">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<a href="#" class="navbar-brand">

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
            {/* Navbar code remains same... */}

            <h1 className="text-center mt-4">Login Form</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* 1. Wrap everything in the Formik component */}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values,actions) => {
                                alert("it is successfully submitted");
                                actions.resetForm();
                            }}
                        >
                            {/* 2. Use the Form component (automatically handles submit) */}
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <Field type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Field type="password" name="password" className="form-control" />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}