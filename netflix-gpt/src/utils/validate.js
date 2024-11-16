export const validateForm = (email,password) =>{
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isEmailValid) return "Email is not Valid!";
    if(!isPasswordValid) return "Password is not Valid!";
    return null;
}