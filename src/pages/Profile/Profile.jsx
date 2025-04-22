import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AuthContext from "../../context/AuthContext/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">
    <Helmet>
      <title>Profile | Hotel Booking</title>
      <meta name="description" content="View your profile details on the Hotel Booking Platform." />
    </Helmet>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 max-w-lg"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Your Profile
        </h2>

        {/* User Avatar */}
        {user?.photoURL && (
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL}
              alt={`${user.displayName || "User"}'s avatar`}
              className="w-24 h-24 rounded-full border-2 border-blue-500 dark:border-yellow-400 shadow-sm object-cover"
            />
          </div>
        )}

        {/* Profile Details */}
        <div className="space-y-4 text-center">
          {/* Name */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</h3>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {user?.displayName || "Not set"}
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</h3>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {user?.email || "Not set"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
  );
};

export default Profile;