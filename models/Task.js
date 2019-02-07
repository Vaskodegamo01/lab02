const mongoose =require("mongoose");


const TaskSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: String,
    description: String,
    status: String
});

const  Task = mongoose.model("Task", TaskSchema);

module.exports = Task;