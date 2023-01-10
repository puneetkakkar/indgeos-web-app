import { Box, Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../theme";

const LoginPage = () => {
  const { login, error } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.grid}>
        <Box style={{ marginBottom: "15px", width: "90%" }}>
          <span style={{ color: "#fff", fontSize: "40px" }}>INDGEOS</span>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box style={styles.inputGroup}>
            <Box display="flex" marginBottom={"15px"}>
              <label style={styles.labelStyle} htmlFor="email">
                <Box component={"span"} style={styles.hidden}>
                  Email
                </Box>
              </label>
              <input
                id="email"
                type="text"
                name="email"
                style={{ ...styles.formInput, ...styles.inputStyle }}
                placeholder="Email"
                required={true}
              />
              <Box component={"span"} color={theme.palette.error.main}></Box>
            </Box>
            <Box display="flex" marginBottom={"15px"}>
              <label style={styles.labelStyle} htmlFor="password">
                <Box component={"span"} style={styles.hidden}>
                  Password
                </Box>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                style={{ ...styles.formInput, ...styles.inputStyle }}
                placeholder="Password"
                required={true}
              />
              <Box component={"span"} color={theme.palette.error.main}></Box>
            </Box>
          </Box>
          {error ? (
            <Box
              margin="15px 0px"
              color={theme.palette.error.main}
              textAlign="center"
            >
              Invalid email/password. Please try again.
            </Box>
          ) : null}
          <Button type="submit" style={styles.submitButton} variant="contained">
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    // background: "#2c3338",
    background: "#353535",
    minHeight: "100vh",
  },
  grid: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "25rem",
    width: "90%",
  },
  inputGroup: {},
  hidden: {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
  },
  labelStyle: {
    backgroundColor: "#303032",
    borderBottomRightRadius: "0",
    borderTopRightRadius: "0",
    borderRadius: "0.25rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  inputStyle: {
    borderRadius: "0.25rem",
    padding: "1rem",
    backgroundColor: "#2a2c2f",
    borderBottomLeftRadius: "0",
    borderTopLeftRadius: "0",
    backgroundImage: "none",
    border: "0",
    color: "#fff",
    font: "inherit",
    outline: "0",
    WebkitTransition: "background-color 0.3s",
    transition: "background-color 0.3s",
  },
  formInput: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: "#4c4fea",
    // backgroundColor: "#00A0FF",
    color: "#eee",
    fontWeight: "700",
    textTransform: "uppercase",
    cursor: "pointer",
    width: "100%",
    borderRadius: "0.25rem",
    padding: "1rem",
    fontSize: "18px",
  },
};

export default LoginPage;
