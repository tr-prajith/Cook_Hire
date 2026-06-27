const Inquiry = require("../models/inquiryModel");
const sendMail = require("../utils/sendMail");

const createInquiry = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            location,
            serviceRequirement,
            additionalNotes,
            website,
        } = req.body;

        if (website) {
            return res.status(400).json({
                success: false,
                message: "Spam detected",
            });
        }

        if (!name || !phone || !location || !serviceRequirement) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        const inquiry = await Inquiry.create({
            name,
            phone,
            email,
            location,
            serviceRequirement,
            additionalNotes,
        });

        // nodemailer
        sendMail(
            "New Customer Inquiry - CookHire",
            `
    New customer inquiry received.

    Name: ${name}
    Phone: ${phone}
    Email: ${email || "Not provided"}
    Location: ${location}
    Service Requirement: ${serviceRequirement}
    Additional Notes: ${additionalNotes || "No notes"}
    `
        ).catch((mailError) => {
            console.log("Email sending failed:", mailError.message);
        });

        res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
            data: inquiry,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Inquiry submission failed",
            error: error.message,
        })
    }
};

module.exports = { createInquiry };