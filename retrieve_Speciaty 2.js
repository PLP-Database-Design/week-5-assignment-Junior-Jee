// Question 4: Retrieve all providers by specialty
app.get('/providers/specialty/:specialty', (req, res) => {
  const { specialty } = req.params;
  const sql = 'SELECT * FROM providers WHERE provider_specialty = ?';
  db.query(sql, [specialty], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
