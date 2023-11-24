const isKPPValid = (orgKPP: string) => {
    if(orgKPP.length !== 9 || String(+orgKPP ^ 0) !== orgKPP) {
        return false
    } return true
}  

export default isKPPValid;
