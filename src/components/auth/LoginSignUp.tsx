"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

type FormType = "login" | "signup" | "forgot-password";

export function LoginSignUp() {
  const [formType, setFormType] = useState<FormType>("login");
  const [isOpen, setIsOpen] = useState(false);

  // Form handlers
  const handleLoginSubmit = (result: any) => {
    console.log("Login successful:", result);
    // Handle successful login
    setIsOpen(false);
    // You can add additional logic here like redirecting or updating global state
    window.location.reload(); // Simple way to refresh and update auth state
  };

  const handleSignUpSubmit = (result: any) => {
    console.log("Signup successful:", result);
    // Handle successful signup
    setIsOpen(false);
    // You can add additional logic here like redirecting or updating global state
    window.location.reload(); // Simple way to refresh and update auth state
  };

  const handleForgotPasswordSubmit = (data: any) => {
    console.log("Forgot password data:", data);
    // Handle forgot password logic here
    // Email sent, OTP form will be shown by ForgotPasswordForm component
  };

  const handleOTPSubmit = (data: any) => {
    console.log("OTP data:", data);
    // Handle OTP verification logic here
    setIsOpen(false);
    setFormType("login");
  };

  const getDialogTitle = () => {
    switch (formType) {
      case "login":
        return "Sign In";
      case "signup":
        return "Create Account";
      case "forgot-password":
        return "Reset Password";
      default:
        return "Authentication";
    }
  };

  const getDialogDescription = () => {
    switch (formType) {
      case "login":
        return "Sign in to your account to continue";
      case "signup":
        return "Create a new account to get started";
      case "forgot-password":
        return "Enter your email to reset your password";
      default:
        return "";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className=" shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{getDialogTitle()}</DialogTitle>
          <DialogDescription>{getDialogDescription()}</DialogDescription>
        </DialogHeader>

        {/* Login Form */}
        {formType === "login" && (
          <LoginForm
            onSubmit={handleLoginSubmit}
            onForgotPassword={() => setFormType("forgot-password")}
            onSignUpClick={() => setFormType("signup")}
          />
        )}

        {/* Signup Form */}
        {formType === "signup" && (
          <SignUpForm
            onSubmit={handleSignUpSubmit}
            onSignInClick={() => setFormType("login")}
          />
        )}

        {/* Forgot Password Form */}
        {formType === "forgot-password" && (
          <ForgotPasswordForm
            onSubmit={handleForgotPasswordSubmit}
            onOTPSubmit={handleOTPSubmit}
            onBackToLogin={() => setFormType("login")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
