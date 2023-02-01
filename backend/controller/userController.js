const { avatarUpload, galleryUpload } = require("../utils/upload");
const user = require("./../models/User")


exports.addAvatar = (req, res) => {
    try {
        avatarUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json(
                    {
                        success: false,
                        message: "multer error" + err
                    }
                )
            }
            // console.log(req.body);
            // console.log(req.file.filename);
            const result = await user.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            }
            )
            res.json({
                success: true,
                message: "avatar add successfully"
            })

        })


    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: " error" + error
            }
        )
    }
}


exports.getAllAvatar = async (req, res) => {
    try {
        const result = await user.find()

        res.json({
            success: true,
            message: "all avatar fetched successfully",
            result
        })


    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: " error" + error
            }
        )
    }
}


exports.addToGallery = (req, res) => {
    try {
        galleryUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json(
                    {
                        success: false,
                        message: "multer error" + err
                    }
                )
            }
            // console.log(req.body);
            // console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)
            }
            const result = await user.create({
                ...req.body,
                docs: d
            })
            res.json({
                success: true,
                message: "docs add successfully"
            })

        })


    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: " error" + error
            }
        )
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            message: "users fetched successfully",
            result
        })




    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: " error" + error
            }
        )
    }
}

exports.destroyAllUsers = async (req, res) => {
    try {
        const result = await user.deleteMany()
        res.json({
            success: true,
            message: "all users deleted successfully",

        })




    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: " error" + error
            }
        )
    }
}