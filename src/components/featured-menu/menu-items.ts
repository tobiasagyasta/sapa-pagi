export const featuredMenuItems = [
  {
    title: "Sunrise Breakfast Burrito",
    category: "Breakfast Burritos",
    description:
      "Soft eggs, roasted potato, melted cheese, and a gentle morning salsa wrapped warm.",
    accent: "yellow",
  },
  {
    title: "Toasty Egg Sandwich",
    category: "Sandwiches",
    description:
      "A cozy cafe sandwich with folded egg, avocado mint spread, and a tender toasted bun.",
    accent: "mint",
  },
  {
    title: "Mango Morning Smoothie",
    category: "Smoothies",
    description:
      "Bright fruit, creamy texture, and a soft finish for slow starts or quick commutes.",
    accent: "cream",
  },
  {
    title: "Coconut Roast Coffee",
    category: "Coffee",
    description:
      "A smooth, rounded cup with a comforting roast profile and easy morning warmth.",
    accent: "roast",
  },
] as const

export type FeaturedMenuItem = (typeof featuredMenuItems)[number]
