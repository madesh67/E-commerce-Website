import db from "../config/db.js";

export const getHomepage = async (req, res) => {
  const start = process.hrtime.bigint();

  const [heroResult, featuredResult, categoriesResult] = await Promise.all([
    db.query(
      `
      SELECT *
      FROM hero_images
      ORDER BY display_order
      `,
    ),
    db.query(
      `
      SELECT *
      FROM featured_products
      `,
    ),
    db.query(
      `
      SELECT *
      FROM categories
      `,
    ),
  ]);

  const totalMs = Number(process.hrtime.bigint() - start) / 1_000_000;

  res.set("Server-Timing", `homepage;dur=${totalMs.toFixed(1)}`);

  res.json({
    hero: heroResult[0],

    featured: featuredResult[0],

    categories: categoriesResult[0],
  });
};
