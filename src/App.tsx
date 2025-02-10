"use client";
import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const yesButtonSize = noCount * 20 + 16;

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

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "ga",
      "yakin sayang?",
      "km nda mau pergi sama mas?",
      "mas sedih loh ini sayang",
      "kita pergii yuuu",
      "nantii kita beli es krim",
      "belii yang km mau jugaa",
      "belii kue kesukaan kita",
      "CATHERAISE",
      "ayuuu kita nyobain bu yudi",
      "ayuuu kita ke taman",
      "mas kangen",
      "sama km",
      "hehe",
      "mau yaa?",
      "Voulez-vous?",
      "你想要_____吗？",
      "mas sedi :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white overflow-hidden">
      {yesPressed && (
        <ReactConfetti width={windowSize.width} height={windowSize.height} />
      )}

      {yesPressed ? (
        <>
          <div className="animate-bounce">
            <span className="text-sm text-black">
              Susahnya dapet stiker ini sayang alamakkk
            </span>
          </div>
          <img
            className="max-w-full h-auto"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-2xl md:text-4xl font-bold text-center text-black animate-pulse">
            <span>WOKEEEH LOVE U SAYANG, OIYA WAIT MAS PUNYA INI!!</span>
          </div>
          <button
            type="button"
            className="mt-4 rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() =>
              (window.location.href =
                "https://mesayaaa.github.io/travel-places/")
            }
          >
            pencet deh sayang ❤️
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[200px] bg-white"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="my-4 text-2xl md:text-4xl text-center text-black font-bold">
            Km mau pergi sama mas nda? 🥺
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="transform transition-all duration-300 hover:scale-110 rounded-full bg-green-600 px-8 py-3 font-bold text-white hover:bg-green-800 hover:shadow-xl"
              style={{
                fontSize: yesButtonSize,
                transition: "all 0.3s ease",
              }}
              onClick={handleYesClick}
            >
              MAUUU
            </button>
            <button
              onClick={handleNoClick}
              className="transform transition-all duration-300 hover:scale-105 rounded-full bg-red-600 px-8 py-3 font-bold text-white hover:bg-red-800 hover:shadow-xl"
            >
              {noCount === 0 ? "ga" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
