"use client";

import { motion } from "framer-motion";
import styles from "./BackgroundChain.module.css";
export default function BackgroundChain() {
  return (
    <motion.div
      className={styles.chainWrapper}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
    >
      <img
        src="/images/tokenomics/chain.png"
        alt="Chain background"
        className={styles.chainImage}
      />
    </motion.div>
  );
}
