/**
 * EMAIL VAILDATION
 * **/
const validateEmail = (text: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(text)) {
        return true
    } else {
        return false
    }
};

export {
    validateEmail
}