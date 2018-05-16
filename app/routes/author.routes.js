module.exports = (app) => {
    const authores = require('../controllers/author.controller.js');

    // Create a new Author
    app.post('/authors', authores.create);

    // Retrieve all Authors
    app.get('/authors', authores.findAll);

    // Retrieve a single Author with authorId
    app.get('/authors/:authorId', authores.findOne);

    // Update a Author with authorId
    app.put('/authors/:authorId', authores.update);

    // Delete a Author with authorId
    app.delete('/authors/:authorId', authores.delete);
}