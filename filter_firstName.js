// Question 3: Filter patients by first name
app.get('/patients/:firstName', (req, res) => {
  const { firstName } = req.params;
  const sql = 'SELECT * FROM patients WHERE first_name = ?';
  db.query(sql, [firstName], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
