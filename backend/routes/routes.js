import express from "express";
const router = express.Router();

import contactUs from '../controller/contactUs.js';

router.post('/contactus', contactUs);

export default router