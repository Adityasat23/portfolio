#!/bin/bash
# =============================================================
# compress.sh - Auto-Compress Gambar Menggunakan SIPS bawaan Mac
# =============================================================

TARGET_DIR="public/thumbnails"

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Folder '$TARGET_DIR' tidak ditemukan."
  exit 1
fi

echo "📉 Memulai kompresi gambar di folder: $TARGET_DIR"
echo "================================================="

for filepath in "$TARGET_DIR"/*; do
  if [ -f "$filepath" ]; then
    filename=$(basename "$filepath")
    ext="${filename##*.}"
    
    # Kompres khusus file PNG dan JPG/JPEG
    if [[ "$ext" == "png" || "$ext" == "jpg" || "$ext" == "jpeg" || "$ext" == "webp" ]]; then
      echo "⚡ Mengompres: $filename ..."
      # sips mengeset kualitas kompresi (80% / menggunakan value 'low' hingga 'best')
      sips -s formatJavaScript default "$filepath" --setProperty formatOptions 80 &> /dev/null
    fi
  fi
done

echo "================================================="
echo "✅ Selesai! Semua gambar di $TARGET_DIR berhasil dikompres."
echo "================================================="