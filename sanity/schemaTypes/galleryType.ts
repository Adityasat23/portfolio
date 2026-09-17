import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Description',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ["Commercial", "UGC", "Product", "AI Video", "Social Content", "UI/UX", "Other"],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'relatedProject',
      title: 'Related Project (Optional)',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'If you want this image to link to a Work Project, select it here.',
    }),
  ],
})
