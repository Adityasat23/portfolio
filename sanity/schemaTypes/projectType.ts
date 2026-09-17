import { defineField, defineType, defineArrayMember } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Work Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (URL Slug)',
      type: 'string',
      description: 'Digunakan untuk URL, contoh: "gemini"',
      validation: (rule) => rule.required(),
    }),
    
    // --- ORDERING ---
    defineField({
      name: 'orderRank',
      title: 'Urutan (Angka)',
      type: 'number',
      description: 'Isi dengan angka (1, 2, 3, dst) untuk mengatur urutan tampil di website. Angka terkecil akan tampil paling atas.',
    }),

    // --- BILINGUAL TITLE ---
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'titleId',
      title: 'Title (Indonesian)',
      type: 'string',
    }),
    
    defineField({
      name: 'showInHome',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Aktifkan jika ingin proyek ini muncul di bagian Selected Works di halaman depan.',
      initialValue: false,
    }),

    // --- META ---
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period (Year)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ["Commercial", "UGC", "Product", "AI Video", "Social Content", "UI/UX"],
      },
    }),

    // --- THUMBNAIL (For /work page) ---
    defineField({
      name: 'thumb',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metricsTitle',
      title: 'Card Metrics (e.g., "21.7M+ Views")',
      type: 'string',
    }),

    // --- HERO MEDIA ---
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'image',
      options: { hotspot: true },
    }),

    // --- METRICS ARRAY (For Detail Page) ---
    defineField({
      name: 'metricsDetail',
      title: 'Detail Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'labelEn', type: 'string', title: 'Label (English)' },
            { name: 'labelId', type: 'string', title: 'Label (Indonesian)' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        }),
      ],
    }),

    // --- OVERVIEW ---
    defineField({
      name: 'overviewEn',
      title: 'Overview (English)',
      type: 'text',
    }),
    defineField({
      name: 'overviewId',
      title: 'Overview (Indonesian)',
      type: 'text',
    }),

    // --- EXECUTION ARRAY ---
    defineField({
      name: 'execution',
      title: 'Execution / Process',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'titleEn', type: 'string', title: 'Title (English)' },
            { name: 'titleId', type: 'string', title: 'Title (Indonesian)' },
            { name: 'descEn', type: 'text', title: 'Description (English)' },
            { name: 'descId', type: 'text', title: 'Description (Indonesian)' },
            { name: 'visual', type: 'image', title: 'Visual', options: { hotspot: true } },
          ],
        }),
      ],
    }),

    // --- PROJECT GALLERY ---
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
            { name: 'link', type: 'url', title: 'Link (Optional)' },
            { 
              name: 'category', 
              type: 'string', 
              title: 'Specific Category (Optional)',
              description: 'Jika dikosongkan, akan mengikuti kategori utama project.',
              options: {
                list: ["Commercial", "UGC", "Product", "AI Video", "Social Content", "UI/UX"]
              }
            },
          ],
        }),
      ],
    }),

    // --- NEXT PROJECT ---
    defineField({
      name: 'nextProject',
      title: 'Next Project (Optional)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Pilih proyek selanjutnya untuk dimunculkan di paling bawah halaman.',
    }),
  ],
})
