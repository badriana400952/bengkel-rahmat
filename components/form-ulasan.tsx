"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { handlePostUlasan } from "@/actions/ulasan"

interface ReviewFormProps {
  onSubmitSuccess?: () => void
}

export function ReviewForm({ onSubmitSuccess }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    nama: "",
    rating: 0,
    komentar: "",
    kendaraan: "",
  })
  const [hoverRating, setHoverRating] = useState(0)
  const [submitMessage, setSubmitMessage] = useState("")


  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Tulis Ulasan Anda</h3>
        <form action={handlePostUlasan} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium mb-2">
              Nama <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Masukkan nama Anda"
            />
          </div>

          {/* Vehicle Input */}
          <div>
            <label htmlFor="kendaraan" className="block text-sm font-medium mb-2">
              Jenis Kendaraan <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="kendaraan"
              name="kendaraan"
              required
              value={formData.kendaraan}
              onChange={(e) => setFormData({ ...formData, kendaraan: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Contoh: Honda Vario 150, Yamaha NMAX"
            />
          </div>

          {/* Rating Input */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Rating <span className="text-destructive">*</span>
            </label>

            {/* HIDDEN INPUT YANG DIKIRIM KE SERVER */}
            <input
              type="hidden"
              name="rating"
              value={formData.rating}
            />

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${star <= (hoverRating || formData.rating)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>


          {/* Comment Input */}
          <div>
            <label htmlFor="komentar" className="block text-sm font-medium mb-2">
              Komentar <span className="text-destructive">*</span>
            </label>
            <textarea
              id="komentar"
              required
              name="komentar"
              value={formData.komentar}
              onChange={(e) => setFormData({ ...formData, komentar: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Ceritakan pengalaman Anda dengan layanan kami..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full hover:cursor-pointer" size="lg" >
            Kirim Ulasan
          </Button>

          {/* Success/Error Message */}
          {submitMessage && (
            <p
              className={`text-center text-sm ${submitMessage.includes("Terima kasih") ? "text-green-600" : "text-destructive"
                }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </CardContent>
    </Card>


  )
}
