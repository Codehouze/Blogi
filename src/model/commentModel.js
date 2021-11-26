module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
          userId:String,
          questionId:String,
          comment:String,
          status:Boolean,
        },
        { timestamps: true }
  
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Comment = mongoose.model("comment", schema);
    return Comment;
  };
