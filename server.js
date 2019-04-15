const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });

app.listen(port, () => `Server running on port ${port}`);