
'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  const handleClick = () => {
    window.location.href = 'https://trkoffer.net/cl/i/o4mqod'
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
