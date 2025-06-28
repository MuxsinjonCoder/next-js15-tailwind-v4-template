"use client";

import LoginForm from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginCard() {
  return (
    <>
      <motion.div
        className="z-50 min-w-[250px] sm:min-w-[400px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Card className="shadow-xl border border-blue-100 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-5 justify-center mb-5">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image width={150} height={70} src={"/logo.png"} alt="logo" />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardTitle className="text-center text-primary text-lg pl-5 border-l-2 border-primary">
                  Tizimga kirish
                </CardTitle>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardDescription className="text-xs text-center">
                Tizimga kirish uchun admin tomonidan berilgan login va paroldan
                foydalaning
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LoginForm />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
