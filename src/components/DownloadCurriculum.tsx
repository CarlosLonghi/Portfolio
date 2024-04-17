import { DownloadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export function DownloadCurriculum() {
  const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  const [captcha, setCaptcha] = useState<string | null>(null)

  return (
    <>
      <ReCAPTCHA
        sitekey={reCaptchaSiteKey}
        onChange={setCaptcha}
        hidden={captcha !== null}
      />

      {captcha && (
        <a
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-cyan-900 py-3 md:w-1/2"
          href="pdf/CarlosLonghi_CV.pdf"
          download={'CarlosLonghi_CV.pdf'}
        >
          Fazer Download
          <DownloadSimple className="h-5 w-5" />
        </a>
      )}
    </>
  )
}
