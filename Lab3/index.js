var http = require("http");
const Employee = require("./Employee");
console.log("Lab 03 -  NodeJs");


const port = process.env.PORT || 8081


const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else 
        {
                if (req.url === '/') {
                    res.end("<h1>Welcome to Lab Exercise 03</h1>");
                    return;
                }

                if (req.url === '/employee') {
                    res.end(JSON.stringify(Employee.getAllEmployees()));
                    return;
                }

                if (req.url === '/employee/names') {
                    res.end(JSON.stringify(Employee.getEmployeeNames()));
                    return;
                }

                if (req.url === '/employee/totalsalary') {
                    res.end(JSON.stringify({ total_salary: Employee.getTotalSalary() }));
                    return;
                }

            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
