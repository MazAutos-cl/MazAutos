import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';

const rangeIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 40 40"
    >
      <path d="M19 7.039a13 13 0 0 0-7.458 3.089l2.372 2.372-1.414 1.414-2.372-2.372A12.999 12.999 0 0 0 7.038 19H11v2H7.039a12.998 12.998 0 0 0 3.089 7.458l2.372-2.372 1.414 1.414-3.813 3.814-.708-.707a15 15 0 1 1 21.214 0l-.707.707-3.814-3.814 1.414-1.414 2.372 2.372A12.999 12.999 0 0 0 32.962 21H29v-2h3.962A12.999 12.999 0 0 0 21 7.038V11h-2V7.039Z"></path>
      <path fill-rule="evenodd" d="M25 20a5 5 0 1 1-2.243-4.172l3.076-3.075 1.415 1.414-3.076 3.076c.523.79.828 1.738.828 2.757Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path>
      <path d="M24.333 30.667h-8.666v2h8.666v-2Z"></path>
    </SvgIcon>
    )
}

export default rangeIcon