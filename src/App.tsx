"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Enggak",
      "Seriusan?",
      "Gimana kalau aku minta dengan baik-baik?",
      "Tolong dong",
      "Dengan kue beras coklat di atasnya",
      "Gimana kalau es matcha?",
      "TOLONG YA",
      "Tapi :*(",
      "Aku bakal mati",
      "Iya, aku udah mati",
      "Oke, kamu lagi ngomong sama hantu nathan",
      "Tolong ya sayang",
      ":((((",
      "TOLONG DONG",
      "Aku udah mati",
      "Enggak :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {yesPressed ? (
        <>
          <div>
            <span className="text-sm">
              susahnya dapet stiker ini sayang alamakkk
            </span>
          </div>
          <img
            className="max-w-full h-auto"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-2xl md:text-4xl font-bold text-center">
            <span>WOKEEEH LOVE U SAYANG, OIYA WAIT MAS PUNYA INI!!</span>
          </div>
          <div>
            <button
              onClick={() => (window.location.href = "/another-page")}
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Go to Another Page
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[200px] max-w-full h-auto"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="my-4 text-2xl md:text-4xl text-center">
            km mau pergi sama mas nda?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <button
              className={`mr-0 md:mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="mt-4 md:mt-0 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
