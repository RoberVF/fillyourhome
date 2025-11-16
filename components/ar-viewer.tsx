"use client"

import { useState } from "react"
import { Maximize2, X } from 'lucide-react'

interface ARViewerProps {
  productName: string
  productImage: string
}

export function ARViewer({ productName, productImage }: ARViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
      >
        <Maximize2 className="w-5 h-5" />
        View in Augmented Reality
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-xl max-w-2xl w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">View {productName} in AR</h2>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setUploadedImage(null)
                }}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!uploadedImage ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Upload a photo of your room to see how {productName} would look in your space
                    </p>
                    <label className="inline-block cursor-pointer">
                      <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        Choose Image
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Note: This is a preview feature. Upload a room photo to visualize the furniture.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative bg-muted rounded-lg overflow-hidden">
                    <img src={uploadedImage || "/placeholder.svg"} alt="Room preview" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <img
                        src={productImage || "/placeholder.svg"}
                        alt={productName}
                        className="h-40 object-contain opacity-80"
                      />
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    This is a preview of how {productName} might look in your space
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      Try Another Image
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
