/* mongoose.js */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("DB connected");
});

const CatSchema = mongoose.Schema({
    name: String
});

const Cat = mongoose.model('Kitty', CatSchema);

var silence = new Cat({ name: 'Silence' });

silence.save();