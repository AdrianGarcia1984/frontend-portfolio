import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t}= useTranslation()
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
    <div className="container px-4">
      <p className="text-sm text-gray-500 text-center">
        {t("footer.developed")} <strong>Adrian Garcia </strong>
       
      </p>
    </div>
  </footer>
  )
}

export default Footer