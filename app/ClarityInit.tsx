// app/ClarityInit.tsx
'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

export default function ClarityInit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Clarity.init('rdnptvmjs1') // replace with your actual Clarity project ID
    }
  }, [])

  return null
}
