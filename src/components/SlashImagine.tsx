import { TypeAnimation } from "react-type-animation";

interface SlashImagineProps {
  setStyleNumber: (styleNumber: number) => void;
}

export default function SlashImagine({ setStyleNumber }: SlashImagineProps) {
  const styles = [
    { style: "Choose style", number: 0 },
    { style: "Crayon Painting", number: 1 },
    { style: "Watercolor Art", number: 2 },
    { style: "Sci-Fi Art", number: 3 },
  ];

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    {
      const selectedStyleNumber = styles.find(
        (style) => style.style === event.target.value
      )?.number;
      if (selectedStyleNumber) {
        setStyleNumber(selectedStyleNumber);
      }

      console.log(selectedStyleNumber);
    }
  };

  return (
    <div className="bg-gray-800 w-screen py-8">
      <div className="flex items-center justify-center align-baseline text-gray-200 space-x-4 mx-4">
        <div className="bg-gray-700 px-2 rounded py-2 font-bold ">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "/imagine",
              1000,
            ]}
            wrapper="span"
            className="w-36"
            speed={5}
          />
        </div>
        <span>
          UAE in Drawing, 8K, HD, Super-Resolution, in the style of
          <select
            className="bg-gray-200 text-black inline-block ml-2 border-gray-600 rounded"
            onChange={handleStyleChange}
          >
            {styles.map((style) => (
              <option key={style.style} value={style.style}>
                {style.style}
              </option>
            ))}
          </select>{" "}
          --q 2
        </span>
      </div>
    </div>
  );
}
