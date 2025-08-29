import { useEffect, useMemo, useState } from 'react'
import { Mic, StopCircle, MessageCircle, X, AlertTriangle, Volume2 } from 'lucide-react'
import { useSpeech } from '../hooks/useSpeech'
import { profile } from '../data/profile'

function buildAnswer(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('안녕')) return `안녕하세요! ${profile.name}에 대해 궁금한 것을 질문해 보세요.`
  if (q.includes('이름') || q.includes('who are you')) return `저는 ${profile.name}, ${profile.role} 입니다.`
  if (q.includes('경력') || q.includes('몇 년')) return `${profile.role}로 약 ${profile.years}년 경험이 있습니다.`
  if (q.includes('기술') || q.includes('스택')) return `주요 스택은 ${profile.skills.join(', ')} 입니다.`
  if (q.includes('프로젝트') || q.includes('하이라이트')) return `주요 하이라이트로는 ${profile.highlights.join(', ')} 등이 있습니다.`
  if (q.includes('관심') || q.includes('관심사')) return `관심사는 ${profile.interests.join(', ')} 입니다.`
  return '질문 감사합니다! 백엔드, 아키텍처, 경험, 기술 스택 등에 대해 물어보시면 자세히 답변드릴게요.'
}

const VoiceAssistant = () => {
  const { isSupported, listening, start, stop, transcript, resetTranscript, speak, speaking, error, status } = useSpeech()
  const [open, setOpen] = useState(false)
  const [autoLoop, setAutoLoop] = useState(false)
  const [hintShown, setHintShown] = useState<boolean>(() => {
    try { return localStorage.getItem('assistant_hint') === '1' } catch { return false }
  })
  const answer = useMemo(() => (transcript ? buildAnswer(transcript) : ''), [transcript])

  useEffect(() => {
    ;(window as any).openAssistant = () => setOpen(true)
  }, [])

  useEffect(() => {
    if (open) {
      // 패널 열릴 때 1회 안내 멘트
      speak(`안녕하세요! ${profile.name}에 대해 궁금한 것을 질문해 보세요.`)
      if (!hintShown) {
        try { localStorage.setItem('assistant_hint', '1') } catch {}
        setHintShown(true)
      }
    }
  }, [open])

  useEffect(() => {
    if (!autoLoop) return
    if (!listening && transcript) {
      speak(answer)
    }
  }, [autoLoop, listening, transcript, answer, speak])

  useEffect(() => {
    if (!autoLoop) return
    if (!speaking && !listening && transcript) {
      const t = setTimeout(() => {
        resetTranscript()
        start()
      }, 300)
      return () => clearTimeout(t)
    }
  }, [autoLoop, speaking, listening, transcript, resetTranscript, start])

  if (!isSupported) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <div className="relative">
          {!hintShown && (
            <div className="absolute -top-12 right-0 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 shadow rounded-lg px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
              눌러서 음성으로 질문해 보세요!
            </div>
          )}
          <button onClick={() => setOpen(true)} className="bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl px-4 py-3 flex items-center gap-2 animate-pulse">
            <MessageCircle size={20} /> 질문하기
          </button>
        </div>
      ) : (
        <div className="w-80 card">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">음성 Q&A</div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between mb-3 text-xs">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-primary-600"
                checked={autoLoop}
                onChange={(e) => setAutoLoop(e.target.checked)}
              />
              자동 모드
            </label>
            <div className="text-gray-500">상태: {status}</div>
          </div>

          {error && (
            <div className="mb-3 p-2 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded text-xs flex items-center gap-2">
              <AlertTriangle size={14} /> 오류: {error} (권한/HTTPS 확인)
            </div>
          )}

          <div className="space-y-3">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {autoLoop ? '자동으로 질문 → 답변 → 재대기를 반복합니다.' : '듣기 후 필요할 때 답변 재생을 눌러주세요.'}
            </div>
            <div className="p-3 bg-gray-50 dark:bg-dark-700 rounded min-h-[60px] text-sm whitespace-pre-wrap">
              {transcript || '대기 중...'}
            </div>
            {answer && (
              <div className="p-3 bg-white dark:bg-dark-800 rounded border border-gray-200 dark:border-dark-600 text-sm">
                {answer}
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              {listening ? '듣는 중...' : speaking ? '말하는 중...' : '준비됨'}
            </div>
            <div className="flex gap-2">
              {!listening && !speaking ? (
                <button onClick={() => { resetTranscript(); start(); }} className="btn-primary inline-flex items-center gap-2">
                  <Mic size={16} /> 듣기
                </button>
              ) : (
                <button onClick={stop} className="btn-secondary inline-flex items-center gap-2">
                  <StopCircle size={16} /> 중지
                </button>
              )}
              {!autoLoop && answer && !speaking && (
                <button onClick={() => speak(answer)} className="btn-secondary inline-flex items-center gap-2">
                  <Volume2 size={16} /> 답변 재생
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            - 크롬/엣지 권장, 사파리는 제한적일 수 있어요.
            <br />- 마이크 권한 허용 필요. 로컬(http://localhost) 또는 HTTPS에서 테스트하세요.
          </div>
        </div>
      )}
    </div>
  )
}

export default VoiceAssistant
