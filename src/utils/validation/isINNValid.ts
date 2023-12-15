const isINNValid = (orgINN: string) => {
    // if (orgINN.length !== 10 || String(+orgINN ^ 0) !== orgINN) {
    //     return false;
    // } return true;

    const innRegex = /^\d{10}$|^\d{10}$/;

    if (innRegex.test(orgINN)) {
        return false;
    } else {
        return true;
    }
}

export default isINNValid;
