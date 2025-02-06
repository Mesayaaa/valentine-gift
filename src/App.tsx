"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [open, setOpen] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
      "sayang :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-0 bg-gradient-to-r from-pink-500 to-yellow-500">
      {yesPressed ? (
        <>
          <div>
            <span className="text-sm animate-bounce text-white">
              Susahnya dapet stiker ini sayang alamakkk
            </span>
          </div>
          <img
            className="max-w-full h-auto transition-transform transform hover:scale-110"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-2xl md:text-4xl font-bold text-center text-white">
            <span>WOKEEEH LOVE U SAYANG, OIYA WAIT MAS PUNYA INI!!</span>
          </div>
          <div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="mt-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800 transition duration-300 transform hover:scale-105"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Tur kita sayang, oiya btw pencet ini cantikkk
                </button>
              </div>

              {open && (
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-auto max-w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-4 max-h-screen overflow-y-auto">
                  <div className="py-1 text-center">
                    <span className="block text-lg font-bold mb-2 whitespace-nowrap overflow-hidden">
                      kita mau pergi keee
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex flex-col space-y-4">
                        <button
                          className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                          onClick={() => alert("makasii sayang")}
                        >
                          karaokee
                        </button>
                        <button
                          className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                          onClick={() => alert("Mmakasii sayang")}
                        >
                          kidzaniaaa
                        </button>
                        <button
                          className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                          onClick={() => alert("Mmakasii sayang")}
                        >
                          pantaiiii
                        </button>
                      </div>
                    </div>
                    <span className="block text-lg px-4 py-2 text-sm text-center">
                      see u sayang!!! &lt;3
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[200px] max-w-full h-auto transition-transform transform hover:scale-110"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="my-4 text-2xl md:text-4xl text-center text-white">
            Km mau pergi sama mas nda?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <button
              className={`mr-0 md:mr-4 rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800 transition duration-300 transform hover:scale-105`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              MAUUU
            </button>
            <button
              onClick={handleNoClick}
              className="mt-4 md:mt-0 rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-800 transition duration-300 transform hover:scale-105"
            >
              {noCount === 0 ? "ga" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
