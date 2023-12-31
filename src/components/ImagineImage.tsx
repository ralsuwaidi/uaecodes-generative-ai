import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import image1 from "@/images/1.jpg";
import image2 from "@/images/2.jpg";
import image3 from "@/images/3.jpg";
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [image1, image2, image3];

interface ImagineImageProps {
  styleNumber: number;
}

const buttonList = [
  { text: "UAE Codes", link: "https://ai.gov.ae/uaecodes/" },
  { text: "Learn", link: "http://octopus-app-czg7j.ondigitalocean.app" },
  {
    text: "AI Guide",
    link:
      "https://ai.gov.ae/wp-content/uploads/2023/04/406.-Generative-AI-Guide_ver1-EN.pdf",
  },
];

export default function ImagineImage({ styleNumber }: ImagineImageProps) {
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const typingSpeed = 80; // speed in ms
  const sentence =
    "You have generated an AI image. These images are created by artificial intelligence with the ability to generate visual images from scratch or style transfer based on the inputs it receives.";
  const typingTime = 5500;

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 4200);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showText) {
      const timer2 = setTimeout(() => setShowButtons(true), typingTime);
      return () => clearTimeout(timer2);
    }
  }, [showText, typingTime]);

  return (
    <div className="relative">
      <div className="bg-gray-800 text-white w-full py-4 px-4 absolute inset-x-0 bottom-0 ">
        {showText && (
          <p>
            <TypeAnimation
              sequence={[sentence, 1000]}
              wrapper="span"
              speed={typingSpeed}
            />
          </p>
        )}
        {showButtons && (
          <div className="mt-4 mb-2 flex flex-wrap gap-2">
            {buttonList.map((button) => (
              <a
                key={button.text}
                href={button.link}
                className=" py-1 px-2 border rounded hover:bg-gray-600"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="w-screen h-screen bg-gray-900 flex flex-wrap items-center justify-center ">
        <style>{`@keyframes removeBlur {
          0% { filter: blur(100px); }
          100% { filter: blur(0px); }
        }`}</style>
        <img
          className="rounded-lg max-w-screen max-h-screen object-cover animation-removeBlur px-5"
          style={{ animationName: "removeBlur", animationDuration: "4s" }}
          src={images[styleNumber - 1].src}
        />
      </div>
    </div>
  );
}
