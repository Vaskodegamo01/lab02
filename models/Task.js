const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: String,
    description: String,
    status: {
        type: String,
        default: 'new',
        enum: ['new','in_progress', 'complete']
    }
});

const  Task = mongoose.model("Task", TaskSchema);

module.exports = Task;