// import { useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Login = () => {
//   const {Login} = useContext();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";
//   console.log('state in the location', location.state)

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         Login(email, password)
//         .then(result => {
//           const user = result.user;
//           console.log(user)
//           Swal.fire({
//             title: "User Login Successful",
//             showClass: {
//               popup: `
//                 animate__animated
//                 animate__fadeInUp
//                 animate__faster
//               `
//             },
//             hideClass: {
//               popup: `
//                 animate__animated
//                 animate__fadeOutDown
//                 animate__faster
//               `
//             }
//           });
//           navigate(from, { replace: true });
//         })
//     }

//   return (
//     <>
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col md:flex-row-reverse">
//         <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
//         <LoginWith></LoginWith>
//           <form onSubmit={handleLogin} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name= "email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 name="password"
//                 className="input input-bordered"
//                 required
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
//             </div>
//           </form>
//           <p className="text-center mt-0 mb-5"><small>New Here? <Link className="text-green-600" to="/signup">Create an account</Link></small></p>
//         </div>
//       </div>
//     </div> 
//     </>
//   );
// };

// export default Login;