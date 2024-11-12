const express = require('express');
const router = express.Router();

// 添加薪资相关的路由处理程序
router.get('/', (req, res) => {
  res.json({ message: 'Salary routes working' });
});

module.exports = router; 