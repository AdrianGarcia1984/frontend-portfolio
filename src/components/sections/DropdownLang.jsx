import { useEffect, useState } from "react";
import i18n, { langs } from "./../../i18n";
import { FaGlobe } from "react-icons/fa";

const DropdownLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs.find((l) => l.value === 'es'));

  useEffect(() => {
    if (window.localStorage.getItem("i18nextLng")) {
      i18n.changeLanguage(window.localStorage.getItem("i18nextLng"));
      setCurrentLang(langs.find((l) => l.value === window.localStorage.getItem("i18nextLng")));
    }
  }, [currentLang])


  const changeLang = (lang) => {
    //window.localStorage.setItem("i18nextLng", lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
    setCurrentLang(langs.find((l) => l.value === lang));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 border text-gray-800 px-4 py-2 rounded flex space-x-2"
      >
        <FaGlobe />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-38 bg-gray-100 border border-gray-300 rounded shadow-lg text-white py-2">
          <ul className="p-0 m-0 list-none">
            {langs.map((lang) => (
              <li
                key={lang.value}
                onClick={() => changeLang(lang.value)}
                className="flex space-x-2 px-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200"
              >
                <span>{lang.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLang;