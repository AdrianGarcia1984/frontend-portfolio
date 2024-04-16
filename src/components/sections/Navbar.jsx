import React, {useState} from 'react'
import { NavLink} from 'react-router-dom';
import DropdownLang from './DropdownLang';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

    const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleAvatarDropdown = () => {
      setOpenAvatarDropdown(!openAvatarDropdown);
  };

  return (
    <>
    <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded text-gray-800 flex justify-between">
      <ul className="flex flex-wrap">
        <NavLink to="/">
                <li className="m-3 lg:mx-5">        
                {t("navbar.home")}</li>
            </NavLink>
            <div onClick={toggleAvatarDropdown} className="m-3 lg:mx-5 relative transition-all duration-500">
                  <span className="cursor-pointer">{t("navbar.proyects")}</span>
                  <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-200 rounded shadow-md mt-2 space-y-2`}>
                      <div className='p-4 flex flex-col'>
                          <NavLink to="/notes">{t("navbar.users")}</NavLink>
                          <NavLink to="/RickAndMortyApp">{t("navbar.api")}</NavLink>
                          <NavLink to="https://github.com/AdrianGarcia1984?tab=repositories" target="_blank">{t("navbar.more")}</NavLink>
                      </div>
                  </div>
              </div>
              <NavLink to="/contact">
            <li className="m-3 lg:mx-5">        
            {t("navbar.contact")}</li>
            </NavLink>
        </ul>
            <DropdownLang className="justify-end"/>
    </nav>


  </>
  )
}

export default Navbar
