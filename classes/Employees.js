class Employees {
  static #allEmployees = [];
  #salary;
  #isHired;
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    return Employees.#allEmployees.reduce((acc, employee) => acc + employee.getSalary(), 0)
  }
}

module.exports = Employees;
