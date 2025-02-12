"use client";
import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-out;
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage({ isLoading }: { isLoading: boolean }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 3,
      }}
    >
      <AnimatedBox
        sx={{
          textAlign: "center",
          color: "black",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div variants={textVariants}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                background: "linear-gradient(45deg, #ff6969, #ff5f5f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              loading dulu
            </Typography>
          </motion.div>

          <motion.div variants={textVariants}>
            <Typography
              variant="h5"
              sx={{
                marginBottom: 4,
                color: "#666",
              }}
            >
              hehe
            </Typography>
          </motion.div>

          {isLoading && (
            <motion.div
              variants={textVariants}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CircularProgress
                sx={{
                  color: "#ff5f5f",
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatedBox>
    </Box>
  );
}
