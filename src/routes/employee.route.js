const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employee.controller');

router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.get('/:search', employeeController.getEmployeesByNameAndTeam);
router.post('/create_employee', employeeController.createEmployee);
router.put('/update_employee/:id', employeeController.updateEmployee);
router.delete('/delete_employee/:id', employeeController.deleteEmployee);

module.exports = router;
