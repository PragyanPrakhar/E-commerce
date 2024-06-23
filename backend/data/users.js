//it will hold three dummy users.
import bcrypt from 'bcryptjs';
const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('12345678',10),
        isAdmin:true,
    },
    {
        name:'Mahesh',
        email:'mahesh@email.com',
        password:bcrypt.hashSync('12345678',10),
        isAdmin:false,
    },
    {
        name:'Ramesh',
        email:'ramesh@email.com',
        password:bcrypt.hashSync('12345678',10),
        isAdmin:false,
    }
]
export default users;
