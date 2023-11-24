const isINNValid = (orgINN: string) => {
    if (orgINN.length !== 10 || String(+orgINN ^ 0) !== orgINN) {
        return false;
    } return true;
}

export default isINNValid;
