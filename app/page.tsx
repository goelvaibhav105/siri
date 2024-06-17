"use client";
import Messages from "@/components/Messages";
import Recorder from "@/components/Recorder";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef< HTMLButtonElement| null>(null)

  const uploadAudio = (blob:Blob) =>{
    const url = URL.createObjectURL(blob);
    const file = new File([blob],'audio.webm',{type:blob.type});

    
  }

  return (
    <main className="bg-black h-screen overflow-y-auto ">
      {/* Header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5 ">
        <Image
          alt="logo"
          src="https://lh3.googleusercontent.com/a/ACg8ocK5FMiIlc048fFJpnoqoV89bQ93TFLhoIvn870Ln6bMPG0_9Lo4=s540-c-no"
          height={50}
          width={50}
        />
        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black transition-all ease-in-out duration-150 hover:bg-purple-700 hover:text-white"
        />
      </header>

      {/* Form */}
      <form className="flex flex-col bg-black ">
        {/* Gradient */}
        <div className="flex-1 bg-gradient-to-b from-purple-500 to-black">
          <Messages />
        </div>

         {/* // hidden selector by ref and hidden button  */}
        <input type="file" hidden ref={fileRef} />
        <button type="submit" hidden  ref={submitButtonRef}/>
        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl ">
          {/* Recorder */}
          <Recorder />
          {/* Voice synthesiser output of the assistant voice */}
        </div>
      </form>
    </main>
  );
}
