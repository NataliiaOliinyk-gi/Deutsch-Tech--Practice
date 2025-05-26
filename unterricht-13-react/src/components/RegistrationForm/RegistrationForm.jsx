import { useState, useCallback, useMemo, memo } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    console.log("RegistrationForm.jsx gerender");

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prev) => (
            { ...prev, [name]: value }
        ));
    }, []);

    const totalChars = useMemo(() => {
        const { username, email, password } = formData;
        return (username.length + email.length + password.length);
    }, [formData]);

    return (
        <div>
            <TextField
                name="username"
                label="username"
                defaultValue={formData.username}
                onChange={handleChange}
                variant="outlined" />
            <TextField
                type="email"
                name="email"
                label="email"
                defaultValue={formData.email}
                onChange={handleChange}
                variant="outlined" />
            <TextField
                type="password"
                name="password"
                label="password"
                defaultValue={formData.password}
                onChange={handleChange}
                variant="outlined" />

            <Typography variant="h5" gutterBottom>
                die gesamte Zeichenanzahl {totalChars}
            </Typography>
        </div>
    )
};

export default memo(RegistrationForm);