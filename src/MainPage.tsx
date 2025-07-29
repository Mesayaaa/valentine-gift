import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function MainPage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "gaaa",
      "beneran?",
      "yakin sayang?",
      "km nda mau pergi sama mas?",
      "mas kangen ketemu km",
      "kita pergii yuuu",
      "nantii kita beli es krim",
      "hari ini mas yang beliin km",
      "boleee semua",
      "ato",
      "belii kue kesukaan kita",
      "CATHERAISE",
      "apaa kita gass ke ke pantai sayang WKWKWKKW",
      "kangen km",
      "hehe",
      "mau yaa?",
      "Voulez-vous?",
      "你想要_____吗？",
      "AYUUU KITAA GASSS SAYANG",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white overflow-hidden">
      {yesPressed && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.3}
          initialVelocityY={10}
          tweenDuration={5000}
        />
      )}

      <AnimatePresence mode="wait">
        {yesPressed ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div>
              <span className="text-xs text-black italic">
                *susahnya dapet stiker ini sayang alamakkk
              </span>
            </div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-full h-auto"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="my-4 text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent animate-pulse"
            >
              <span>WKWKWKWKW</span>
              <br />
              <span>LOVE U SAYANGKU CINTAKU</span>
            </motion.div>
            <button
              type="button"
              onClick={() => {
                setTimeout(() => {
                  window.location.href = "/";
                }, 1200);
              }}
              className="mt-4 rounded-full bg-white
                         font-bold text-rose-500 
                         relative overflow-hidden
                         transition-all duration-700 ease-in-out
                         transform hover:-translate-y-1
                         hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.6)]
                         active:translate-y-0.5 active:shadow-inner
                         focus:outline-none focus:ring-4 focus:ring-rose-300
                         flex items-center justify-center gap-3
                         group
                         px-6 py-2
                         md:px-10 md:py-5
                         border-2 border-rose-400
                         before:absolute before:inset-0
                         before:bg-gradient-to-r before:from-rose-400 before:via-red-400 before:to-red-500
                         before:translate-x-[-100%] before:hover:translate-x-0
                         before:transition-transform before:duration-700
                         before:z-[-1]"
            >
              <span
                className="text-base md:text-xl font-semibold
                             relative z-10 group-hover:text-white
                             transition-all duration-500
                             group-hover:tracking-wider"
              >
                pencet deh sayang
              </span>
              <span className="relative z-10 animate-bounce group-hover:animate-ping">
                ❤️
              </span>
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                            from-rose-400/20 via-red-400/20 to-red-500/20 
                            rounded-full blur-xl group-hover:opacity-75 
                            transition-opacity duration-500"
              ></div>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="my-4 text-2xl md:text-4xl text-center text-black font-bold 
                         bg-black 
                         bg-clip-text text-transparent
                         transition-all duration-300
                         hover:scale-105
                         p-4"
            >
              Sayang...
              <br />
              <span className="text-xl md:text-3xl block mt-2">
                mas bolee minta satu hari ini buat pergi sama mas nda?
              </span>
            </motion.h1>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-110 hover:shadow-xl active:scale-95"
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                mauu
              </button>
              <button
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-110 hover:shadow-xl active:scale-95"
              >
                {getNoButtonText()}
              </button>

              <p className="w-full text-center mt-4 text-sm text-gray-500 italic">
                *note: km inget gaa hari ini hari apa
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
