import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    additionalPricePerPerson: {
        type: Number,
        required: true,
    },
    servicesIncluded: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Package = mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Package;