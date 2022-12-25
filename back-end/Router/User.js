const { Router } = require("express");
const router = Router();


// new user 
router.get('sign-up', (req, res, next) => {
  res.json({name: 'Mohd Rejoan'})
})




export default router;
