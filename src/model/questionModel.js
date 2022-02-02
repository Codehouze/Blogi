module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      title: String,
      body: String,
      tags: Array,
      
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Question = mongoose.model("question", schema);
  return Question;
};
