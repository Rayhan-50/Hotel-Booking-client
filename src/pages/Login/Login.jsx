
import Lottie from "lottie-react";
import loginLottieJSON from "../../assets/Lottie/login.json";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success(`Welcome back, ${result.user.displayName}!`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (email) => {
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        toast.error("Failed to send password reset email.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Login | Hotel Booking</title>
        <meta
          name="description"
          content="Login to your Hotel Booking account to manage bookings, view your reservations, and enjoy exclusive benefits."
        />
        <meta
          name="keywords"
          content="login, hotel booking, user account, reservations, access bookings"
        />
        <meta name="author" content="Hotel Booking Team" />
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieJSON}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4">Sign In!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={() =>
                    handleForgotPassword(
                      document.querySelector("input[name='email']").value
                    )
                  }
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className={`btn ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
                } text-white`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="m-4 flex justify-center items-center">
              <button onClick={handleGoogleSignIn} className="btn">
                Google
              </button>
            </div>
            <h1 className="text-center">
              IF YOU ARE NOT REGISTERED{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                PLEASE REGISTER
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


