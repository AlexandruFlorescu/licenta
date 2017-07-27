const mongoose = require('mongoose');

const crewsSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      index: {unique: true}
    },
    email: {
      type: String
    },
    image:{
      type: String,
      default: './../assets/matthew.png',
    },
    users:{
      type: [String],
    },
    rolesDefined:{
      type: [String],
    },
    reputation:{
      type: Number,
      default: 100,
      min: 0,
      max: 9999,
    },
    honor:{
      type: Number,
      default: 100,
      min: 0,
      max: 9999,
    },
    create_date:{
      type: Date,
      default: Date.now
    }
});

const Crews = module.exports = mongoose.model('crews', crewsSchema);

module.exports.getCrews = (callback) => {
  Crews.find(callback);
}

module.exports.findCrew = (crew,callback) => {
  Crews.find(crew, callback);
}

module.exports.addCrew = (crew, callback) => {
  Crews.create(crew, callback);
}
