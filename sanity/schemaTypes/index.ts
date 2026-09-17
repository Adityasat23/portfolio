import { type SchemaTypeDefinition } from 'sanity'

import { projectType } from './projectType'
import { galleryType } from './galleryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, galleryType],
}
