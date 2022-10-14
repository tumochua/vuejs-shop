const reg =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

const handleValidateEmail = ({ email }) => {
  // console.log("check email", email);
  //   console.log("check", data);
  // eslint-disable-next-line no-useless-escape
  if (reg.test(email)) {
    return {
      status: true,
      errCode: 2,
    };
  } else {
    if (email.trim().length === 0) {
      return {
        status: true,
        message: `Trường này là bắt buộc`,
        errCode: 4,
      };
    }
    return {
      status: true,
      message: `Trường này phải là email`,
      errCode: 4,
    };
  }
};

const handleChekLength = ({ password }) => {
  if (password.trim().length === 0) {
    return {
      status: true,
      message: `Trường này là bắt buộc`,
      errCode: 4,
    };
  } else {
    if (password.trim().length < 6) {
      return {
        status: true,
        message: `Trường này phải lớn hơn 5 kí tự`,
        errCode: 4,
      };
    }
    return {
      status: true,
      errCode: 2,
    };
  }
};

const handleValidateForm = (data) => {
  if (data.password.trim().length === 0 || data.email.trim().length === 0) {
    return {
      errCode: 4,
      errMessage: "Trường này là bắt buộc",
      status: true,
      email: "email",
      password: "password",
    };
  } else {
    const isPassword = handleChekLength(data);
    const isEmail = handleValidateEmail(data);
    console.log("isEmail", isEmail);
    console.log("isPassword", isPassword);
  }
};
const handleValidate = (data) => {
  if (!data.email || !data.password) {
    return {
      message: "Trường này là bắt buộc",
    };
  }
};

module.exports = {
  handleValidateEmail,
  handleChekLength,
  handleValidateForm,
  handleValidate,
};
