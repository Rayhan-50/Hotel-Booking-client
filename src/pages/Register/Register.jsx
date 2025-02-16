// import Lottie from 'lottie-react';
// import registerLottieData from '../../assets/Lottie/register.json'
// import { useContext } from 'react';
// import AuthContext from '../../context/AuthContext/AuthContext';
// import { Helmet } from 'react-helmet';

// const Register = () => {
//     const {createUser ,signInWithGoogle} = useContext(AuthContext);
//     const handleGoogleSignIn =()=>{
//       signInWithGoogle()
//       .then(result =>{
//           console.log(result.user)
//       })
//       .catch(error =>{
//           console.log(error.message)
//       })
//   }
//     const handleRegister =e=>{
//         e.preventDefault();
//         const form =e.target;
//         const email =form.email.value;
//         const password=form.password.value;
//         console.log(email,password);
//         createUser(email,password)
//         .then(result =>{
//           console.log(result.user)
//         })
//         .catch(error =>{
//           console.log(error.message)
//         })
//       }
//     return (
//         <div>
//           <div className="hero bg-base-200 min-h-screen">
//           <Helmet>
//         <title>Register | Hotel Booking</title>
//         <meta
//           name="description"
//           content="Create your account to enjoy a seamless hotel booking experience. Join now and access exclusive offers and rewards."
//         />
//         <meta
//           name="keywords"
//           content="register, hotel booking, sign up, create account, exclusive offers, rewards"
//         />
//         <meta name="author" content="Hotel Booking Team" />
//       </Helmet>
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left w-96">
     
//       <Lottie animationData={registerLottieData}></Lottie>
//     </div>
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//     <h1 className="text-5xl font-bold ml-8 mt-4">Register now!</h1>
   
//       <form  onSubmit={handleRegister} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="email" name='email' className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" placeholder="password" name='password' className="input input-bordered" required />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//       <div className="divider divider-horizontal">OR</div>
//      <div className='m-4'>
   
//      <div className='flex justify-center items-center'>
//      <button onClick={handleGoogleSignIn} className="btn">Google</button>
//      </div>
//      </div>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Register;

import Lottie from 'lottie-react';
import registerLottieData from '../../assets/Lottie/register.json';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        toast.success(`Welcome, ${result.user.displayName}!`);
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must contain at least 6 characters, an uppercase letter, and a lowercase letter.'
      );
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const profileUpdates = { displayName: name };
        if (photoURL) profileUpdates.photoURL = photoURL;

        updateProfile(user, profileUpdates)
          .then(() => {
            toast.success('Registration successful! Welcome to Hotel Booking.');
            navigate('/');
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile.');
          });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Helmet>
        <title>Register | Hotel Booking</title>
        <meta
          name="description"
          content="Create your account to enjoy a seamless hotel booking experience. Join now and access exclusive offers and rewards."
        />
        <meta
          name="keywords"
          content="register, hotel booking, sign up, create account, exclusive offers, rewards"
        />
        <meta name="author" content="Hotel Booking Team" />
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottieData} loop={false} />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold ml-8 mt-4">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL (optional)"
                  name="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={loading}>
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="m-4">
              <div className="flex justify-center items-center">
                <button onClick={handleGoogleSignIn} className="btn" disabled={loading}>
                  Google
                </button>
              </div>
            </div>
            <p className="text-center mb-4">
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
