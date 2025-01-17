'use client' // Error components must be Client Components
import { useEffect } from "react";

export default function Error ({
  error,
  reset,
} : {
  error: Error & { disgest?: string},
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>something went wrong!</h2>
      <button onClick={() => reset()}>
        Try Again!
      </button>
    </div>
  )
}