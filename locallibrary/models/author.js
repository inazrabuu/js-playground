const { DateTime } = require('luxon')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
})

authorSchema.virtual("name").get(function() {
  let fullname = ''
  if (this.first_name && this.family_name)
    fullname = `${this.family_name}, ${this.first_name}`

  return fullname
})

authorSchema.virtual("date_of_birth_formatted").get(function() {
  return this.date_of_birth ? 
    DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATETIME_MED) : ''
})

authorSchema.virtual("date_of_death_formatted").get(function() {
  return this.date_of_death ? 
    DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATETIME_MED) : ''
})

authorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function() {
  return this.date_of_birth ? 
    DateTime.fromJSDate(this.date_of_birth).toISODate() : ''
})

authorSchema.virtual("date_of_death_yyyy_mm_dd").get(function() {
  return this.date_of_death ? 
    DateTime.fromJSDate(this.date_of_death).toISODate() : ''
})

authorSchema.virtual("url").get(function() {
  return `/catalog/author/${this._id}`
})

module.exports = mongoose.model("Author", authorSchema)