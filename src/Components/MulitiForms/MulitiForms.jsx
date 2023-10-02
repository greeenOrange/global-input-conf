import { useReducer } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function MulitiForms() {

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        quantity: 0,
        feedback: "",
        term: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term,
                }
            case "DECREASE":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            case "INCREASE":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const defaultTheme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={(e) => dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="last Name"
                                    name="lastName"
                                    autoComplete="text"
                                    autoFocus
                                    onChange={(e) => dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) => dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Education</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Education"
                                        name="education"
                                        onChange={(e) => dispatch({
                                            type: "INPUT",
                                            payload: { name: e.target.name, value: e.target.value },
                                        })}
                                    >
                                        <MenuItem value="SSC">SSC</MenuItem>
                                        <MenuItem value="HSC">HSC</MenuItem>
                                        <MenuItem value="Houners">Houners</MenuItem>
                                        <MenuItem value="Masters">Masters</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextareaAutosize
                                    name="feedback"
                                    style={{ width: "100%", marginTop: "1rem" }}
                                    minRows={5}
                                    fullWidth
                                    id="fullWidth"
                                    onChange={(e) => dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })}
                                />
                                <FormControl
                                    required
                                >
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            onClick={(e) => dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })}
                                            value="female" control={<Radio />}
                                            label="Female" name="gender"
                                        />
                                        <FormControlLabel
                                            onClick={(e) => dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })}
                                            value="male" control={<Radio />}
                                            label="Male" name="gender"
                                        />
                                        <FormControlLabel
                                            onClick={(e) => dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })}
                                            value="other" control={<Radio />}
                                            label="Other" name="gender"
                                        />
                                        <FormControlLabel
                                            value="disabled"
                                            disabled
                                            control={<Radio />}
                                            label="other"
                                        />
                                    </RadioGroup>
                                </FormControl>

                                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                   {state?.quantity > 0 && <Button
                                        onClick={() => dispatch({ type: "DECREASE" })}
                                        size="small" variant="contained"
                                    >-</Button>}
                                    <TextField
                                        required
                                        value={state?.quantity}
                                    />
                                    <Button
                                        onClick={() => dispatch({ type: "INCREASE" })}
                                        size="small" variant="contained">+</Button>

                                    <FormControlLabel
                                        onClick={() => dispatch({ type: "TOGGLE" })}
                                        required
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                </Stack>
                                <Button
                                    disabled={!state.term}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    submit
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Stack>
        </>
    )
}

export default MulitiForms