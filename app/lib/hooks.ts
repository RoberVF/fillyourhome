import { useEffect, useState } from "react"

interface UserPreferences {
  favoriteStyles: string[]
  favoriteCategories: string[]
  budgetRange: [number, number]
}

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("userPreferences")
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
    setIsLoading(false)
  }, [])

  const savePreferences = (prefs: UserPreferences) => {
    setPreferences(prefs)
    localStorage.setItem("userPreferences", JSON.stringify(prefs))
  }

  return { preferences, isLoading, savePreferences }
}
