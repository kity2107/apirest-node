const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
  //res.send('Hello World');
  //res.json({ Title: 'Hola mundo!!!' });
  const data = {
    name: 'Felipe',
    lastName: 'Coll',
    website: 'Navigator world',
  };
  res.json(data);
});

module.exports = router;
