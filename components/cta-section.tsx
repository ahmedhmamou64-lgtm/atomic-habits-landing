
'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    _yk?: () => void
    _CJ?: () => void
    CPABuildLock?: () => void
    xfLock?: () => void
    xfContentLocker?: {
      openLocker?: () => void
    }
  }
}

export function CtaSection() {
  const handleClick = () => {
    if (typeof window === 'undefined') return

    if (typeof window._yk === 'function') {
      window._yk()
      return
    }

    if (typeof window.CPABuildLock === 'function') {
      window.CPABuildLock()
      return
    }

    if (typeof window.xfLock === 'function') {
      window.xfLock()
      return
    }

    if (typeof window.xfContentLocker?.openLocker === 'function') {
      window.xfContentLocker.openLocker()
      return
    }

    if (typeof window._CJ === 'function') {
      window._CJ()
      return
    }

    alert('Locker is loading. Please refresh the page.')
  }

  return (
    <section
      className="rise-in flex w-full flex-col items-center gap-4"
      style={{ animationDelay: '600ms' }}
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="sr-only">
        Download Atomic Habits PDF
      </h2>

      <Button
        onClick={handleClick}
        type="button"
        size="lg"
        className="h-[70px] w-full cursor-pointer rounded-[20px] bg-primary text-base font-black uppercase tracking-wide text-primary-foreground shadow-[0_8px_30px_-6px_var(--primary)] hover:bg-primary/90"
      >
        <Download className="size-5" aria-hidden="true" />
        Complete 1 Offer To Download
      </Button>

      <p className="text-center text-sm leading-relaxed text-muted-foreground text-pretty">
        Access conditions apply. Complete the required offer to unlock the file link.
      </p>
    </section>
  )
}
