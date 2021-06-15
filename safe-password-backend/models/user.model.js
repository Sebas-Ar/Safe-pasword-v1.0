import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	passwordList: {
		type: Array,
		required: true
	},
	tagList: {
		type: Array,
		required: true
	}
})

export default mongoose.model('User', userSchema)