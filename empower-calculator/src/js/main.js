import { Calculator } from './components/Calculator.js';
import { AdminInterface } from './components/AdminInterface.js';

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator('calculator-container');
  const adminInterface = new AdminInterface('admin-container');
});
