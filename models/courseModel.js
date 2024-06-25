const {Schema, model} = require('mongoose')

const courseSchema = new Schema ({
    courseName : String,
    courseDescription: String
})

const courseModel = model('course', courseSchema)

module.exports= courseModel
