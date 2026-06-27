const Cook = require("../models/cookModel");
const sendMail = require("../utils/sendMail");

const registerCook = async (req, res) => {
    try {
        const {
            fullName,
            phone,
            email,
            experience,
            cuisineSpecialization,
            preferredWorkType,
            preferredLocation,
            startingPrice,
            website
        } = req.body;


        if (website) {
            return res.status(400).json({
                success: false,
                message: "Spam detected",
            });
        }

        if (
            !fullName ||
            !phone ||
            !experience ||
            !cuisineSpecialization ||
            !preferredWorkType ||
            !preferredLocation ||
            !startingPrice
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        if (!req.files || !req.files.profilePhoto || !req.files.document) {
            return res.status(400).json({
                success: false,
                message: "Profile photo and document are required",
            });
        }

        const profilePhoto = req.files.profilePhoto[0].filename;
        const document = req.files.document[0].filename;

        const cook = await Cook.create({
            fullName,
            phone,
            email,
            experience,
            cuisineSpecialization,
            preferredWorkType,
            preferredLocation,
            startingPrice,
            profilePhoto,
            document,

        });

        // Nodemailer
        sendMail(
            "New Cook Registration - CookHire",
            `
New cook registration received.

Name: ${fullName}
Phone: ${phone}
Email: ${email || "Not provided"}
Experience: ${experience}
Cuisine Specialization: ${cuisineSpecialization}
Preferred Work Type: ${preferredWorkType}
Preferred Location: ${preferredLocation}
Starting Price: ₹${startingPrice}/Meal
`
        ).catch((mailError) => {
            console.log("Email sending failed:", mailError.message);
        });

        res.status(201).json({
            success: true,
            message: "Cook registration submitted successfully",
            data: cook,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cook registration failed",
            error: error.message,
        });
    }
};


const getCooks = async (req, res) => {
    try {
        const cooks = await Cook.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "All cooks fetched successfully",
            data: cooks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to fetch cooks",
            error: error.message,
        });
    }
};

module.exports = { registerCook, getCooks };