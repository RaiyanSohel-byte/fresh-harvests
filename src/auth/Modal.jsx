import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";

const Modal = ({ isOpen, onClose, setIsLoggedIn, setUserRole }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await useAxios.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      return res.data;
    },
    onSuccess: (data) => {
      const token = data?.data?.token;

      if (token) {
        localStorage.setItem("access-token", token);
        setIsLoggedIn(true);
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserRole(payload.role);
        toast.success("Login successful");
        reset();
        onClose();
        navigate("/");
      } else {
        toast.error("Token not found");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Invalid email or password");
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data) => {
      const res = await useAxios.post("/users/register", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Registration successful. Please login");
      reset();
      setIsSignup(false);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  const onSubmit = (data) => {
    isSignup ? registerMutation.mutate(data) : loginMutation.mutate(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500"
        >
          <RxCross2 />
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          {isSignup ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="Your name"
                {...register("fullName", { required: "Name is required" })}
                className="w-full py-4 px-4 border rounded-lg"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: "Email is required" })}
              className="w-full py-4 px-4 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full py-4 px-4 border rounded-lg pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending || registerMutation.isPending}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold"
          >
            {isSignup
              ? registerMutation.isPending
                ? "Registering..."
                : "Register"
              : loginMutation.isPending
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <div className="my-6 text-center text-gray-500 text-sm">
          Or continue with
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="border py-3 rounded-lg flex items-center justify-center gap-2">
            <FcGoogle size={22} /> Google
          </button>
          <button className="border py-3 rounded-lg flex items-center justify-center gap-2">
            <BsFacebook size={22} className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-orange-500 font-medium"
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
