const reg =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

const handleValidateEmail = ({ email }) => {
  // eslint-disable-next-line no-useless-escape
  if (reg.test(email)) {
    return {
      status: 2,
      error: true,
    };
  } else {
    return {
      status: 4,
      errCode: true,
      detailMessage: `Trường này phải là email`,
    };
  }
};

const handleChekLength = ({ password, firstName, lastName }) => {
  const validateLength =
    password.trim().length > 5 &&
    firstName.trim().length > 5 &&
    lastName.trim().length > 5;
  if (validateLength) {
    return {
      status: 2,
      error: true,
    };
  } else {
    return {
      status: 4,
      errCode: true,
      detailMessage: `Trường này phải trên 5 ký tự`,
    };
  }
};

const handleValidateForm = (data) => {
  const validate =
    (
      data.email.trim() &&
      data.password.trim() &&
      data.firstName &&
      data.lastName
    ).length === 0;
  if (validate) {
    return {
      status: 4,
      errCode: true,
      message: "truong nay la bat buoc",
    };
  } else {
    const isEmail = handleValidateEmail(data);
    const isLength = handleChekLength(data);
    if (isEmail.status === 2 && isLength.status === 2) {
      return {
        status: 2,
        message: "successful",
      };
    } else {
      return {
        status: 4,
        isEmail,
        isLength,
      };
    }
  }
};

module.exports = {
  handleValidateEmail,
  handleChekLength,
  handleValidateForm,
  // handleValidationForm,
};
