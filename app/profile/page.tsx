"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserPreferences } from "@/components/user-preferences"
import { User, Edit2 } from 'lucide-react'

interface UserPreferencesState {
  favoriteStyles: string[]
  favoriteCategories: string[]
  budgetRange: [number, number]
}

export default function ProfilePage() {
  const [preferences, setPreferences] = useState<UserPreferencesState | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("userPreferences")
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {!preferences || isEditing ? (
            <UserPreferences
              onPreferencesSet={(prefs) => {
                setPreferences(prefs)
                setIsEditing(false)
              }}
            />
          ) : (
            <div className="space-y-8">
              {/* Profile Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-foreground">My Profile</h1>
                    <p className="text-muted-foreground">Personalized preferences saved</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  <Edit2 className="w-5 h-5" />
                  Edit Preferences
                </button>
              </div>

              {/* Preferences Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Favorite Styles */}
                <div className="p-6 bg-muted rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Favorite Styles</h3>
                  <div className="flex flex-wrap gap-2">
                    {preferences.favoriteStyles.length > 0 ? (
                      preferences.favoriteStyles.map((style) => (
                        <span
                          key={style}
                          className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                        >
                          {style}
                        </span>
                      ))
                    ) : (
                      <span className="text-muted-foreground">No styles selected</span>
                    )}
                  </div>
                </div>

                {/* Favorite Categories */}
                <div className="p-6 bg-muted rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Favorite Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {preferences.favoriteCategories.length > 0 ? (
                      preferences.favoriteCategories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))
                    ) : (
                      <span className="text-muted-foreground">No categories selected</span>
                    )}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="p-6 bg-muted rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Budget Range</h3>
                  <p className="text-2xl font-bold text-primary mb-2">
                    ${preferences.budgetRange[0]} - ${preferences.budgetRange[1]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Max price for recommendations
                  </p>
                </div>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <p className="text-muted-foreground">
                  Your preferences help us recommend furniture that matches your taste and style. Go to our shop to see personalized recommendations!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
