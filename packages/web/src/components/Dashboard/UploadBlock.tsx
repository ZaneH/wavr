import React from 'react'
import { Uploader, Alert } from 'rsuite'

interface Props {
  attachedObjectId: string
  type: string
  title: string
  onSuccess?: Function
  accept?: string
}

const UploadBlock = (props: Props) => {
  return (
    <Uploader
      headers={{
        auth: localStorage.getItem('user/token'),
      }}
      draggable
      multiple={false}
      accept={props.accept}
      action={process.env.REACT_APP_UPLOAD_ENDPOINT}
      data={{ type: props.type, attachedObjectId: props.attachedObjectId }}
      onError={(err: any) => {
        Alert.error(`Error: ${err?.response}`, 4000)
      }}
      onSuccess={(response) => {
        props.onSuccess?.()
      }}
    >
      <div style={{ lineHeight: '100px' }}>{props.title}</div>
    </Uploader>
  )
}

export default UploadBlock
