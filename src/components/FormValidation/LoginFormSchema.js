import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email('Write true email, pls').required('Email is required ^^'),
  password: Yup.string().min(8, 'Must be longer than 8 characters').required('What you can do without password? (-:'),
});

export const dialogFormSchema = Yup.object({
  message: Yup.string().max(300, "Well, you're like perssing a buttons, but press the 'send' pls"),
});

export const profilePostFormSchema = Yup.object({
  post: Yup.string().max(300, 'Умей структурировать свои мысли :-)'),
});

// validate={(values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// }}
