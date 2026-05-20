import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

/**
 * Signup Page
 */
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Signup logic
      console.log('Signing up...');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-secondary text-center mb-2">Create Account</h2>
        <p className="text-gray-600 text-center mb-8">Join VLDS for better health</p>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              <FiUser className="inline mr-2" /> Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none smooth-transition ${
                errors.fullName
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              <FiMail className="inline mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none smooth-transition ${
                errors.email
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              <FiPhone className="inline mr-2" /> Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none smooth-transition ${
                errors.phone
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              <FiLock className="inline mr-2" /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none smooth-transition ${
                  errors.password
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary'
                }`}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-600 hover:text-primary"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              <FiLock className="inline mr-2" /> Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none smooth-transition ${
                errors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 rounded" />
            <span>
              I agree to the <Link to="#" className="text-primary font-semibold">Terms & Conditions</Link>
            </span>
          </label>

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSignup}
            className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 smooth-transition text-lg mt-6"
          >
            Sign Up
          </motion.button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-primary font-semibold hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
