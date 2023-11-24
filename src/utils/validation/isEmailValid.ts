const isEmailValid = (email: string) => {
    const emailRegex = /@../;
    return emailRegex.test(email);
};

export default isEmailValid;
