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
      "gaaa",
      "beneran?",
      "km nda mau pergi sama mas?",
      "mas kangen ketemu km",
      "kita pergii yuuu",
      "nantii kita beli es krim",
      "hari ini mas yang beliin km",
      "boleee semua",
      "ato",
      "belii kue kesukaan kita",
      "CATHERAISE",
      "ayuuu kita nyobain bu yudi WKWKWKWK",
      "mas masi belum kesampean sampe skarang alamak",
      "apaa kita gass ke tamann??",
      "mas sih udaa ada tempatnya",
      "mas pengen bgttt",
      "kangen.",
      "sama km",
      "hehe",
      "mau yaa?",
      "Voulez-vous?",
      "你想要_____吗？",
      "AYUUU KITAA GASSS SAYANG",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

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
            className="mt-4 rounded-full bg-gradient-to-r from-rose-400 via-red-400 to-red-500
                       px-8 py-4 font-bold text-white 
                       transition-all duration-500 
                       hover:from-red-500 hover:via-red-400 hover:to-rose-400
                       hover:scale-110 hover:shadow-2xl
                       active:scale-95
                       flex items-center gap-2
                       shadow-lg"
            onClick={() =>
              (window.location.href =
                "https://mesayaaa.github.io/travel-places/")
            }
          >
            <span className="text-lg">pencet deh sayang</span>
            <span className="animate-bounce">❤️</span>
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
            Km mau pergi sama mas nda?
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
              {noCount === 0 ? "gaaa" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
