import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/emilio-jose-navarro-chavez' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Aodak9' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials