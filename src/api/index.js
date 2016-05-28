import { Router } from 'express'
const router = Router();

router.post('/tenants', (req, res) => {
  console.log('here', req.body);
  res.send(req.body)
})

export default router;
