import * as React from 'react';
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


const defaultTheme = createTheme();

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="last Name"
                  name="name"
                  autoComplete="text"
                  autoFocus
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
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Education</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Education"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>SSC</MenuItem>
                    <MenuItem value={20}>HSC</MenuItem>
                    <MenuItem value={30}>Houners</MenuItem>
                    <MenuItem value={40}>Masters</MenuItem>
                  </Select>
                </FormControl>
                <TextareaAutosize
                  style={{ width: "100%", marginTop: "1rem" }}
                  minRows={5}
                  fullWidth
                  id="fullWidth"
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
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControlLabel
                  required
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                <Button size="small" variant="contained">-</Button>
                <TextField
                  required
                  defaultValue="0"
                /><Button size="small" variant="contained">+</Button>
                </Stack>
                <Button
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

export default App
