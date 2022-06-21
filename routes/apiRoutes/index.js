const router = require('express').Router();
const path = require('path');
const fs = require('fs');

//fetch notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
});

//save new notes
router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Date.now()
    }
    fs.readFile(path.join(__dirname, "../../db/db.json"), (err, data) => {
        if (err) {
            res.status(500);
        }
        let notesArray = JSON.parse(data);
        notesArray.push(newNote);
        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notesArray), (err) => {
            if (err) {
                res.status(500);
            }
            res.json(newNote);
        });
    });
});

//delete notes
router.delete('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Date.now()
    }
    fs.readFile(path.join(__dirname, "../../db/db.json"), (err, data) => {
        if (err) {
            res.status(500);
        }
        let notesArray = JSON.parse(data);
        notesArray.push(newNote);
        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notesArray), (err) => {
            if (err) {
                res.status(500);
            }
            res.json(newNote);
        });
    });
});

module.exports = router;