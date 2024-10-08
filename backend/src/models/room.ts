import mongoose, { Document } from "mongoose";

interface roomType extends Document {
	id: string;
	customUrl: string;
}

const roomSchema = new mongoose.Schema<roomType>({
	id: {
		type: String,
	},
	customUrl: {
		type: String,
	},
});

const Room = mongoose.model<roomType>("Room", roomSchema);
export default Room;
