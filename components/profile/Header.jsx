import React from 'react'
import TapsH from './TapsH';
import Userinfo from './userinfo';

function header() {
  return (
<div className='w-full'>
<TapsH/>

<Userinfo/>
</div>
  )
}

export default header