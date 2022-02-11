import React from 'react'
import { FiMail } from 'react-icons/fi'
import { SiTwitter } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
//import { GrInstagram } from 'react-icons/gr'

function Socials() {
  return (
    <div>
      <ul className='socials-icons font-weight-bold mt-3'>
        <li>
          <a
            href='https://twitter.com/g_odofin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <SiTwitter />{' '}
          </a>
        </li>
        <li>
          <a
            href='mailto:odofing@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FiMail />{' '}
          </a>
        </li>
        <li>
          <a
            href=' https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin />{' '}
          </a>
        </li>
        <li>
          <a
            href='https://github.com/odofing'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithub />{' '}
          </a>
        </li>

        {/* <li>
          <a
            href='https://www.instagram.com/g_odofin/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GrInstagram />{' '}
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default Socials
