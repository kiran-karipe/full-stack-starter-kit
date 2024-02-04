import { checkSchema } from 'express-validator';

const checkUserSchema = checkSchema({
  name: {
    in: ['body'],
    isLength: {
      errorMessage: 'Name should be at least 2 characters long',
      options: { min: 2 }
    },
    exists: {
      errorMessage: 'Name is required'
    }
  },
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Invalid email'
    },
    exists: {
      errorMessage: 'Email is required'
    }
  }
});

export default checkUserSchema; 