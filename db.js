var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var Game = new Schema({
    white_user_id     : String,
    black_user_id     : String,
    fen_string        : String,
    updated_at        : Date
});

mongoose.model('Game', Game);

mongoose.connect('mongodb://localhost/darkchess');
