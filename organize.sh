#!/bin/bash
# =============================================================
# organize.sh (Advanced Smart Rename)
# =============================================================

echo "🚀 Memulai Auto-Format, Smart Move, & Auto-Update..."
echo "============================================================="

# 1. Pastikan folder thumbnails ada
mkdir -p public/thumbnails

# 2. PINDAHKAN file "thumb-..." dari public/ ke public/thumbnails/
echo "📦 1. Memindahkan thumbnail ke foldernya..."
for file in public/thumb-*; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    mv "$file" "public/thumbnails/$filename"
    
    # Segera update path di kodingan karena file pindah rumah
    find app components -type f -name "*.tsx" -exec sed -i '' "s|/$filename|/thumbnails/$filename|g" {} +
    echo "   ➡️  Dipindah: $filename"
  fi
done

# 3. RENAME CERDAS di dalam folder thumbnails
echo ""
echo "🔄 2. Merapikan nama file dan update kode..."
renamed=0

for filepath in public/thumbnails/*; do
  if [ -f "$filepath" ]; then
    filename=$(basename "$filepath")
    ext="${filename##*.}"
    basename_no_ext="${filename%.*}"

    # -- LOGIKA SMART RENAME --
    # a. Ganti spasi ke strip & lowercase (standar)
    new_basename=$(echo "$basename_no_ext" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
    
    # b. Ganti 'tph' jadi 'timephoria'
    new_basename=$(echo "$new_basename" | sed 's/tph/timephoria/g')
    
    # c. Kasih strip sebelum angka 45 (contoh: bem45 -> bem-45)
    new_basename=$(echo "$new_basename" | sed 's/\([a-zA-Z]\)45/\1-45/g')

    new_filename="${new_basename}.${ext}"
    new_filepath="public/thumbnails/$new_filename"

    if [ "$filename" != "$new_filename" ]; then
      # Rename file aslinya
      mv "$filepath" "$new_filepath"
      echo "   ✅ Renamed: $filename  →  $new_filename"
      
      # Update nama barunya di kodingan
      find app components -type f -name "*.tsx" -exec sed -i '' "s|$filename|$new_filename|g" {} +
      
      ((renamed++))
    fi
  fi
done

echo "============================================================="
echo "✅ Selesai! $renamed file berhasil direname dengan format baru."
echo "============================================================="