"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Validation schemas
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const otpSchema = z.object({
  otp: z.string().min(6, "Please enter the 6-digit OTP"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
type OTPFormData = z.infer<typeof otpSchema>;

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormData) => void;
  onOTPSubmit: (data: OTPFormData) => void;
  onBackToLogin: () => void;
}

export function ForgotPasswordForm({
  onSubmit,
  onOTPSubmit,
  onBackToLogin,
}: ForgotPasswordFormProps) {
  const [showOTP, setShowOTP] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  const COUNTDOWN_KEY = "otp_resend_countdown";
  const COUNTDOWN_DURATION = 60; // 1 minute in seconds

  // Check localStorage on component mount
  useEffect(() => {
    const savedEndTime = localStorage.getItem(COUNTDOWN_KEY);
    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const currentTime = Date.now();
      const remainingTime = Math.max(
        0,
        Math.floor((endTime - currentTime) / 1000)
      );

      if (remainingTime > 0) {
        setCountdown(remainingTime);
        setCanResend(false);
      } else {
        localStorage.removeItem(COUNTDOWN_KEY);
      }
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            localStorage.removeItem(COUNTDOWN_KEY);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [countdown]);

  const startCountdown = () => {
    const endTime = Date.now() + COUNTDOWN_DURATION * 1000;
    localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
    setCountdown(COUNTDOWN_DURATION);
    setCanResend(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const emailForm = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const otpForm = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleEmailSubmit = (data: ForgotPasswordFormData) => {
    toast.success("Reset code sent!", {
      description: "Please check your email for the password reset code."
    });
    onSubmit(data);
    setShowOTP(true);
    startCountdown(); // Start countdown when OTP is sent
  };

  const handleOTPSubmit = (data: OTPFormData) => {
    toast.success("OTP verified successfully!", {
      description: "You can now reset your password."
    });
    onOTPSubmit(data);
    // Reset forms and go back to email step
    emailForm.reset();
    otpForm.reset();
    setShowOTP(false);
    // Clear countdown when OTP is successfully verified
    localStorage.removeItem(COUNTDOWN_KEY);
    setCountdown(0);
    setCanResend(true);
  };

  const handleResendCode = () => {
    // Get the email from the form and resubmit
    const email = emailForm.getValues("email");
    if (email && canResend) {
      toast.success("Reset code resent!", {
        description: "Please check your email for the new password reset code."
      });
      onSubmit({ email });
      startCountdown(); // Start new countdown
    }
  };

  const handleBackToEmail = () => {
    setShowOTP(false);
    otpForm.reset();
  };

  if (showOTP) {
    return (
      <Form {...otpForm}>
        <form
          onSubmit={otpForm.handleSubmit(handleOTPSubmit)}
          className="space-y-4"
        >
          <FormField
            control={otpForm.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter OTP</FormLabel>
                <FormControl>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
            <Button
              type="button"
              variant="link"
              onClick={handleResendCode}
              disabled={!canResend}
              className="text-sm"
            >
              {canResend ? "Resend code" : `Resend in ${formatTime(countdown)}`}
            </Button>
            <Button
              type="button"
              variant="link"
              onClick={handleBackToEmail}
              className="text-sm"
            >
              Back to email
            </Button>
          </div>
        </form>
      </Form>
    );
  }

  return (
    <Form {...emailForm}>
      <form
        onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
        className="space-y-4"
      >
        <FormField
          control={emailForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-4">
          <Button type="submit" className="w-full">
            Send Reset Code
          </Button>
          <Button
            type="button"
            variant="link"
            onClick={onBackToLogin}
            className="text-sm"
          >
            Back to sign in
          </Button>
        </div>
      </form>
    </Form>
  );
}
