import { User } from './models/Users'

const user = new User({ name: 'My Name', age: 22 })

user.on('change', () => {
  console.log('Change 1')
})
user.on('change', () => {
  console.log('Change 2')
})
user.on('save', () => {
  console.log('save was triggered')
})

user.trigger('save')
