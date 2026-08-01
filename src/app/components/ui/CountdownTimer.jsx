"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-4 gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
          className="glass-strong group rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105 md:p-6"
        >
          <div className="gradient-text-simple font-mono text-3xl font-bold md:text-5xl lg:text-6xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-medium tracking-wider text-white/60 uppercase md:text-sm">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
