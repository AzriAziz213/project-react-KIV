export const onChange = (context:any, name: string, newValue: any, callback?: any) => {
    context.setState({ [name]: { ...context.state[name], value: newValue }}, callback && callback);
}

export const setError = (context:any, name: string, error: string, callback?: any) => {
    context.setState({ [name]: { ...context.state[name], error: error }}, callback && callback);
}

export const validateForm = (context: any) => {
    let status = true;

    const stateCopy = { ...context.state };

    for (let key in stateCopy) {
        if (stateCopy.hasOwnProperty(key)) {
            const field = stateCopy[key];
            const isRequired = field ? field.required : false;
            if (isRequired) {
                const name = field.name;
                const value = field.value;
                const type = typeof value;

                if ((value === null || value === undefined || value.length === 0) && type !== 'number') {
                    status = false;
                    setError(context, name, 'error found');
                } else {
                    setError(context, name, '');
                }
            }
        }
    }
    return status;
}

export const validateRegistrationForm = (context: any) => {
    let isValid = true; 

    const { email, password, confirmPassword } = context.state; 

    if (password.value.length < 8) { 
        setError(context, 'password', 'Password is too short');
        isValid = false;
    } else {
        setError(context, 'password', '');
    }

    if (password.value !== confirmPassword.value) {
        setError(context, 'confirmPassword', 'Passwords do not match');
        isValid = false;
    } else {
        setError(context, 'confirmPassword', '');
    }

    return isValid; 
};


