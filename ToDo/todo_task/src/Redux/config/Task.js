// class Task {
//   constructor() {
//     super();
//     this.title = "";
//     this.time = "";
//     this.desc = "";
//     this.date = "";
//     this.createdDate = "";
//     this.createdTime = "";
//   }
// }

class Task {
  constructor(
    id,
    title,
    desc = "",
    date = new Date(),
    createdDate = new Date(),
    createdTime = new Date(),
    completed=false
  ) {
    this.title = title;
    this.id = id
    this.desc = desc;
    this.date = date;
    this.createdDate = createdDate;
    this.createdTime = createdTime;
    this.completed = completed
  }
}

export default Task;
