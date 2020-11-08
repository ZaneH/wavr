import React from 'react'
import { Uploader, Alert, Avatar, Whisper, Tooltip } from 'rsuite'
import { FileType } from 'rsuite/lib/Uploader'
import ConditionalWrapper from './ConditionalWrapper'

interface Props {
  isMyPage: boolean
  user: any
}

function previewFile(file, callback) {
  const reader = new FileReader()
  reader.onloadend = () => {
    callback(reader.result)
  }
  reader.readAsDataURL(file)
}

const UserAvatar = ({ isMyPage, user }: Props) => {
  // avatar uploading
  const [uploading, setUploading] = React.useState(false)
  const [fileInfo, setFileInfo] = React.useState(null)

  return (
    <ConditionalWrapper
      condition={isMyPage}
      wrapper={(children) => {
        return (
          <Uploader
            accept="image/*"
            classPrefix="no-rsuite"
            fileListVisible={false}
            action={process.env.REACT_APP_UPLOAD_ENDPOINT}
            headers={{
              type: 'avatar',
              auth: localStorage.getItem('user/token') ?? '',
            }}
            onUpload={(file) => {
              previewFile(file.blobFile, (value) => {
                setFileInfo(value)
              })

              Alert.info('Uploading...')
            }}
            onSuccess={(response: Object, file: FileType) => {
              setUploading(false)
              Alert.success('Upload successful!')
            }}
            onError={(status) => {
              setFileInfo(null)
              setUploading(false)
              Alert.error(
                `Upload failed...${
                  process.env.NODE_ENV === 'development'
                    ? JSON.stringify(status)
                    : // TODO: Format this
                      JSON.stringify(status)
                }`,
                5000
              )
            }}
          >
            {children}
          </Uploader>
        )
      }}
    >
      {/* This div seems unnecessary, it's necessary */}
      <div>
        <span
          className={`avatar-upload-container ${
            isMyPage ? 'avatar-upload' : null
          }`}
        >
          <Whisper
            trigger={'hover'}
            speaker={<Tooltip>Wavr confirmed this user's identity</Tooltip>}
          >
            <span
              className={`${user?.user?.isVerified ? 'verified' : ''}`}
            ></span>
          </Whisper>
          <Avatar
            className="avatar-huge"
            circle
            src={fileInfo ?? user?.user?.avatarURL}
            style={{ fontSize: '3.5em' }}
          >
            {user?.user?.displayName?.charAt(0) ||
              user?.user?.username?.charAt(0)}
          </Avatar>
          <h5>Upload avatar</h5>
        </span>
      </div>
    </ConditionalWrapper>
  )
}

export default UserAvatar
