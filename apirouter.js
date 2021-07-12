const express = require("express");
const router = express.Router();
const apiController = require("./apiController");

router.get("/", apiController.getit);

/**
 * A song type
 * @typedef {object} Song
 * @property {string} title.required - The title
 * @property {string} artist - The artist
 * @property {number} year - The year - double
 */

/**
 * GET /api/v1/albums
 * @summary This is the summary of the endpoint
 * @tags album
 * @return {array<Song>} 200 - success response - application/json
 */
router.get("/v1/albums", (req, res) =>
  res.json([
    {
      title: "abum 1",
    },
  ])
);

/**
 * GET /api/v1/album
 * @summary This is the summary of the endpoint
 * @security BasicAuth
 * @tags album
 * @param {string} name.query.required - name param description
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/v1/album", (req, res) =>
  res.json({
    title: "abum 1",
  })
);

/**
 * GET /api/v1/albums
 * @summary This is the summary of the endpoint
 * @tags album
 * @return {array<Song>} 200 - success response - application/json
 * @example response - 200 - success response example
 * [
 *   {
 *     "title": "Bury the light",
 *     "artist": "Casey Edwards ft. Victor Borba",
 *     "year": 2020
 *   }
 * ]
 */
router.get("/v1/albums", (req, res) =>
  res.json([
    {
      title: "track 1",
    },
  ])
);

module.exports = router;
