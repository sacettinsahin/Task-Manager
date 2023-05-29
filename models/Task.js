const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"], //validasyon mesajı göndermek için
    trim: true, //stringin başındaki ve sonundaki boşlukları siler "    sahin    "--> "sahin"
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false, //eğer girilmezse false gönder
  },
});

module.exports = mongoose.model("Task", TaskSchema);
