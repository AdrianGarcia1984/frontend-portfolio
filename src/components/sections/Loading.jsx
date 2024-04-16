import React, { useState } from 'react'
import './loading.css'
import { useTranslation } from 'react-i18next'

const Loading = () => {
  const [esperar,setEsperar]=useState(false)
  const {t}= useTranslation()

  setTimeout(function(){
    setEsperar(true)      
  }, 2500)
    

  return (
    <div className='content-center' >
      <div className='contentSpiner'>
        <div className='spinner'>      
        </div>    
      </div>
        <div>
          <h3 className='border-2 px-4 py-2 mb-2 text-gray-500'>{t("loading.message1")}</h3>
            {esperar&&
            <h3 className='border-2 px-4 py-2 text-gray-500'>{t("loading.message2")}</h3>        
            }  
        </div>   
    </div>

  )
}

export default Loading

