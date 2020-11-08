import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

interface ISendEmail {
  to: string
  dynamicTemplateData?: any
}

export const sendTransactionEmail = (args: ISendEmail) => {
  sgMail.send({
    from: {
      email: 'no-reply@wavr.me',
      name: 'Wavr',
    },
    subject: 'Wavr Order Details',
    templateId: 'd-d2a4e0a00b4f4314994d1718195818e9',
    to: args.to,
    dynamicTemplateData: args.dynamicTemplateData,
  })
}

export const sendResetPasswordEmail = (args: ISendEmail) => {
  sgMail.send({
    from: {
      email: 'no-reply@wavr.me',
      name: 'Wavr',
    },
    subject: 'Wavr Password Reset',
    templateId: 'd-f06a7a6b03db42b09e6f7db5748a4bf5',
    to: args.to,
    dynamicTemplateData: args.dynamicTemplateData,
  })
}

export const sendWelcomeEmail = (args: ISendEmail) => {
  sgMail.send({
    from: {
      email: 'no-reply@wavr.me',
      name: 'Wavr',
    },
    subject: 'Welcome to Wavr!',
    templateId: 'd-ca3360eb87404c52a116916f54735078',
    to: args.to,
    dynamicTemplateData: args.dynamicTemplateData,
  })
}

export const sendRequestWithdrawEmail = (args: ISendEmail) => {
  sgMail.send({
    from: {
      email: 'no-reply@wavr.me',
      name: 'Wavr',
    },
    subject: 'Action Required: Withdraw Requested',
    templateId: 'd-7b9f70dcae164e8b95470c8021876991',
    to: args.to,
    dynamicTemplateData: args.dynamicTemplateData,
  })
}

export const sendWithdrawVerifiedEmail = (args: ISendEmail) => {
  sgMail.send({
    from: {
      email: 'no-reply@wavr.me',
      name: 'Wavr',
    },
    subject: 'Wavr Withdraw Started',
    templateId: 'd-772caf4be8234b5d90241ddee9c11ada',
    to: args.to,
    dynamicTemplateData: args.dynamicTemplateData,
  })
}
