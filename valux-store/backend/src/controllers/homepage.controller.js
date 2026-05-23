import db from "../config/db.js";

export const getHomepage = async (req, res) => {
  const [hero] = await db.query(
    `
SELECT *
FROM hero_images
ORDER BY display_order
`,
  );

  const [featured] = await db.query(
    `
SELECT *
FROM featured_products
`,
  );

  const [categories] = await db.query(
    `
SELECT *
FROM categories
`,
  );

  res.json({
    hero,

    featured,

    categories,
  });
};
