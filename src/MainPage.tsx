import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

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
      "yakin?",
      "please?",
      "jangan gitu:(",
      "ih sayang:(",
      "nanti nyesel loh",
      "aku sedih nih",
      "terakhir deh",
      "beneran gamau?",
      "yakin nih?",
      "kok gitu:(",
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
            <span>WOKEEEH LOVE U SAYANG</span>
            <br />
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
        <>
          <h1
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
              mas bolee minta satu hari besok buat pergi sama mas nda?
            </span>
          </h1>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-110 hover:shadow-xl active:scale-95"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-110 hover:shadow-xl active:scale-95"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
