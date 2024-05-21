import employeeService from '../services/employeeService.js';
import { catchAsync } from '../utils/error.js';

const getEmployeeList = catchAsync(async (req, res) => {
  const { page = 1, limit = 15, dep_no = 'd005', search_date = '1993-01-31' } = req.query;
  const [employeeList, totalPages] = await employeeService.getEmployeeList(page, limit, dep_no, search_date);
  res.status(200).json({ data: employeeList, totalPages });
});

const getEmployeeTurnoverDetails = catchAsync(async (req, res) => {
  const { search_date = '1993-01-31' } = req.query;
  const [ joinedEmployees, leftEmployees ] = await employeeService.getEmployeeTurnoverDetails(search_date);
  res.status(200).json({ joinedEmployees, leftEmployees });
});

export default {
  getEmployeeList,
  getEmployeeTurnoverDetails
};