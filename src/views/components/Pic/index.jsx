import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'


export default function Index(props) {
  const IconFont = createFromIconfontCN({
    scriptUrl: window.config.iconfontCN,
  });
  return (
    <div>
      {
        props.picUrl ?
          (<img style={{ width: '50px' }} src="" alt="头像" />)
          :
          (<IconFont type='pp-touxiang' style={{ fontSize: props.size }} />)
      }

    </div>
  )
}
