const reg =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

const handleValidateEmail = ({ email, name }) => {
  // console.log("check", email, name);
  //   console.log("check", data);
  // eslint-disable-next-line no-useless-escape
  if (reg.test(email)) {
    return {
      error: true,
    };
  } else {
    return {
      isError: true,
      message: `Trường này là bắt buộc`,
      detailMessage: `Trường này phải là ${name}`,
      name: "email",
    };
  }
};

const handleValidatePassword = ({ password }) => {
  // console.log("check password", password);
  if (password.trim().length < 5) {
    return {
      isError: true,
      message: `Trường này là bắt buộc`,
      detailMessage: `Mật khẩu phải trên 5 ký tự`,
      name: "password",
    };
  } else {
    return {
      error: true,
    };
  }
};
// const handleValidationForm = (data) => {
//   console.log(data);
//   switch (name) {
//     case (name = email):
//       console.log(`$email}`);
//       break;
//     case (name = password):
//       console.log("password");
//       break;
//     default:
//       break;
//   }
// };
// const handleValidationForm = ({ email, password }) => {
//   console.log(email.data.trim().length > 0);
//   if (email.name === "email") {
//     return email.data.trim().length > 0
//       ? {
//           name: email.name,
//           error: false,
//         }
//       : {
//           error: true,
//           message: `Trường này là bắt buộc`,
//           detailMessage: `Trường này phải là ${email.name}`,
//         };
//   }
//   if (password.name === "password") {
//     return email.data.trim().length > 0
//       ? {
//           name: password.name,
//           error: false,
//         }
//       : {
//           error: true,
//           message: `Trường này là bắt buộc`,
//           detailMessage: `Trường này phải là ${password.name}`,
//         };
//   }
// };

const handleValidateForm = (data, name) => {
  if (name === "password") {
    if (data < 6) {
      console.log("err");
      return "Mật khẩu phải Hơn 6 ký tự";
    }
  }
};

module.exports = {
  handleValidateEmail,
  handleValidatePassword,
  handleValidateForm,
  // handleValidationForm,
};
