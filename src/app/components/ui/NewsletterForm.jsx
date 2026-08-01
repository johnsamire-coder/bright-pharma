"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mx-auto w-full max-w-md"
    >
      <div className="glass-strong group flex items-center gap-2 rounded-full p-2 transition-all hover:border-white/20">
        <div className="pl-4 text-white/40">
          <Mail size={20} />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isSubmitted}
          className="flex-1 bg-transparent px-2 py-3 text-sm text-white placeholder-white/40 focus:outline-none md:text-base"
        />
        <button
          type="submit"
          disabled={isLoading || isSubmitted}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/50 disabled:opacity-70 md:px-7 md:text-base"
        >
          {isLoading ? (
            <span className="animate-pulse">Sending...</span>
          ) : isSubmitted ? (
            <>
              <Check size={18} />
              <span className="hidden sm:inline">Subscribed!</span>
            </>
          ) : (
            <>
              <span>Notify Me</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-white/40">
        Be the first to know when we launch. No spam, ever.
      </p>
    </motion.form>
  );
}
