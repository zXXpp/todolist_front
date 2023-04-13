import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import Icon from '../Icon'

export default function Index(props) {

  return (
    <div>
      {
        props.picUrl ?
          (<img style={{ width: '50px' }} src="" alt="头像" />)
          :
          (<Icon type='pp-touxiang' style={{ fontSize: props.size }} />)
      }

    </div>
  )
}
