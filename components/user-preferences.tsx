"use client"

import { useState } from "react"
import { ChevronRight } from 'lucide-react'
import { styleOptions, categoryOptions } from "@/app/lib/product-data"

interface UserPreferences {
  favoriteStyles: string[]
  favoriteCategories: string[]
  budgetRange: [number, number]
}

interface UserPreferencesProps {
  onPreferencesSet?: (preferences: UserPreferences) => void
}

export function UserPreferences({ onPreferencesSet }: UserPreferencesProps) {
  const [step, setStep] = useState(0)
  const [preferences, setPreferences] = useState<UserPreferences>({
    favoriteStyles: [],
    favoriteCategories: [],
    budgetRange: [100, 400],
  })

  const handleStyleToggle = (style: string) => {
    setPreferences({
      ...preferences,
      favoriteStyles: preferences.favoriteStyles.includes(style)
        ? preferences.favoriteStyles.filter((s) => s !== style)
        : [...preferences.favoriteStyles, style],
    })
  }

  const handleCategoryToggle = (category: string) => {
    setPreferences({
      ...preferences,
      favoriteCategories: preferences.favoriteCategories.includes(category)
        ? preferences.favoriteCategories.filter((c) => c !== category)
        : [...preferences.favoriteCategories, category],
    })
  }

  const handleComplete = () => {
    onPreferencesSet?.(preferences)
    localStorage.setItem("userPreferences", JSON.stringify(preferences))
    setStep(0)
  }

  return (
    <div className="space-y-6">
      {step === 0 && (
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Tell us about your style
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help us recommend furniture that matches your taste and preferences
          </p>
          <button
            onClick={() => setStep(1)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Start Personalization
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">What styles do you prefer?</h3>
            <div className="flex flex-wrap gap-3">
              {styleOptions.map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleToggle(style)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    preferences.favoriteStyles.includes(style)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted border border-border text-foreground hover:bg-muted/80"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">What furniture types interest you?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    preferences.favoriteCategories.includes(category)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted border border-border text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Budget range?</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="500"
                value={preferences.budgetRange[1]}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    budgetRange: [preferences.budgetRange[0], Number(e.target.value)],
                  })
                }
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${preferences.budgetRange[0]}</span>
                <span>${preferences.budgetRange[1]}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleComplete}
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Complete Setup
          </button>
        </div>
      )}
    </div>
  )
}
