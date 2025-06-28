import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <div className="flex h-full w-full my-5 items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
    </div>
  );
}
