import { User } from "./models/Users";

const user = new User({name:'eorigj', age:12})
console.log(user.get('name'))
user.set({age:24})
console.log(user.get('age'))