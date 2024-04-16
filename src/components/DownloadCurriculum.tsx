import { DownloadSimple } from '@phosphor-icons/react'
import React from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'

export function DownloadCurriculum() {
  const recaptchaRef = React.createRef<ReCAPTCHA>()
  const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  function handleDownload() {
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaValue) {
      console.log('recaptcha Validado')
      // O usuário passou no teste do CAPTCHA, faça o download do PDF
    } else {
      console.log('recaptcha Reprovado')
      // O usuário não passou no teste do CAPTCHA, mostre uma mensagem de erro
    }
  }

  return (
    <div className="mt-12 flex w-full justify-center">
      <ReCAPTCHA ref={recaptchaRef} sitekey={reCaptchaSiteKey} />
      <button
        className="flex items-center gap-2 rounded-md bg-cyan-900 px-4 py-2"
        onClick={handleDownload}
      >
        Meu Currículo
        <DownloadSimple className="h-5 w-5" />
      </button>
    </div>
  )
}
