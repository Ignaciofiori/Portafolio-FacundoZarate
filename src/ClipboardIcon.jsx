import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons';



const ClipboardIcon = () => {
  return (
    <div className='iconContainer'>
      <FontAwesomeIcon icon={faClipboardList} />
    </div>
  )
}

export default ClipboardIcon
