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
 router.get('/v1/albums', (req, res) => (
  res.json([{
    title: 'track 1',
  }])
));






 /**
   * POST /api/v1/songs
   * @param {Song} request.body.required - song info
   * @return {object} 200 - song response
   */
  router.post('/v1/songs',  (req, res) => res.send('You save a song!'));

  /**
   * POST /api/v1/name
   * @param {string} request.body.required - name body description
   * @return {object} 200 - song response
   */
   router.post('/v1/name', (req, res, next) => {
    try {
      // Validate response
      //validateResponse('Error string', req);
      return res.send('Hello World!');
    } catch (error) {
      return next(error);
    }
  });

  /**
   * GET /api/v1/authors
   * @summary This is the summary or description of the endpoint
   * @param {string} name.query.required - name param description - enum:type1,type2
   * @param {array<string>} license.query - name param description
   * @return {object} 200 - success response - application/json
   */
   router.get('/v1/authors',  (req, res) => (
    res.json([{
      title: 'album 1',
    }])
  )); 
 

module.exports = router;
