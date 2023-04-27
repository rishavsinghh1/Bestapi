export var messages = {
    showloading : 'wait a moment..',
    validation : {
        emailRegx : /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/,
        password : /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@#|$!%*?&]{8,20}$/,
        mobileRegx : /^[0-9]{10}$/i,
        nameRegex : /^[a-zA-Z]{3,}[,. -]{1}[a-zA-Z ]{3,}/,
        characterOnly : /^[a-zA-Z]{2,}$/,
    }
    
  };