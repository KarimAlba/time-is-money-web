const isKPPValid = (orgKPP: string) => {
    // if(orgKPP.length !== 9 || String(+orgKPP ^ 0) !== orgKPP) {
    //     return false
    // } return true

    const kppRegex = /^\d{9}$|^\d{9}$/;

    if (kppRegex.test(orgKPP)) {
        return false;
    } else {
        return true;
    }
}  

export default isKPPValid;
