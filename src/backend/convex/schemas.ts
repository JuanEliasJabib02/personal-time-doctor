import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  user: defineTable({
    name: v.string(),
    email: v.string(),
    emailVerified: v.boolean(),
    updatedAt: v.string(),
    image: v.optional(v.string())
  }).index('by_email', ['email'])
})
