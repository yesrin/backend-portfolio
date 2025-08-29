import { useCallback, useEffect, useRef, useState } from 'react'

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null

export function useSpeech() {
  const [isSupported, setIsSupported] = useState<boolean>(false)
  const [listening, setListening] = useState<boolean>(false)
  const [transcript, setTranscript] = useState<string>('')
  const [speaking, setSpeaking] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<string>('idle')
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    const supported = typeof SpeechRecognition !== 'undefined' && !!synth
    setIsSupported(supported)
    if (!supported) return

    const recognition = new SpeechRecognition()
    recognition.lang = 'ko-KR'
    recognition.interimResults = true
    recognition.continuous = false

    recognition.onstart = () => {
      setStatus('listening')
      setError(null)
    }

    recognition.onresult = (event: any) => {
      const result = Array.from(event.results)
        .map((r: any) => r[0]?.transcript)
        .join(' ')
      setTranscript(result)
    }

    recognition.onend = () => {
      setListening(false)
      setStatus('idle')
    }

    recognition.onerror = (e: any) => {
      setListening(false)
      setStatus('idle')
      setError(e?.error ? String(e.error) : 'speech_recognition_error')
    }

    recognitionRef.current = recognition
  }, [])

  const start = useCallback(() => {
    if (!recognitionRef.current) return
    setTranscript('')
    setListening(true)
    setStatus('request')
    setError(null)
    try {
      recognitionRef.current.start()
    } catch (e) {
      setListening(false)
      setStatus('idle')
      setError('start_failed')
    }
  }, [])

  const stop = useCallback(() => {
    if (!recognitionRef.current) return
    try {
      recognitionRef.current.stop()
    } catch {}
  }, [])

  const resetTranscript = useCallback(() => {
    setTranscript('')
  }, [])

  const speak = useCallback((text: string) => {
    if (!synth) return
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'ko-KR'
    utter.onstart = () => {
      setSpeaking(true)
      setStatus('speaking')
      setError(null)
    }
    utter.onend = () => {
      setSpeaking(false)
      setStatus('idle')
    }
    try {
      synth.speak(utter)
    } catch (e) {
      setError('tts_failed')
      setSpeaking(false)
      setStatus('idle')
    }
  }, [])

  return { isSupported, listening, start, stop, transcript, resetTranscript, speak, speaking, error, status }
}
