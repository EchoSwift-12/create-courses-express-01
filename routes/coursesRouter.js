const express = require('express')
const courseModel = require('../models/courseModel')
const coursesRouter = express.Router()

coursesRouter.post('/', async (req, res) => {
    const { courseName, courseDescription } = req.body

    const newCourse = new courseModel({
        courseName: courseName,
        courseDescription: courseDescription
    })

    await newCourse.save()
    res.json({
        message: "Course Created"
    })

})

module.exports = coursesRouter