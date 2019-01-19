var express = require('express');
var router = express.Router();
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config

/* GET home page. */
router.get('/', async function (req, res, next) {
  const client = new Client({
    config: config.fromKubeconfig(),
    version: '1.9'
  })

  const namespaces = await client.api.v1.namespaces.get();
  res.render('index', {
    title: 'Viglet Rubikube',
    body : JSON.stringify(namespaces)
  });
});

module.exports = router;