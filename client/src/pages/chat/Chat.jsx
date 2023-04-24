import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const messages = ["Hello!", "How are you?", "Nice to meet you!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === messages.length - 1) {
          clearInterval(intervalId);
        }
        return prevIndex + 1;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [messages]);

  useEffect(() => {
    if (index < messages.length) {
      const currentText = messages[index];
      setText(currentText.substring(0, text.length + 1));
    }
  }, [index, messages, text]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Box
        id="pg-body"
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "row",
          flex: "1 1 auto",
          minHeight: 0,
          height: "100%",
        }}
      >
        <Box
          id="pg-editor"
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexFlow: "column",
            p: "24px 0px 24px 24px",
          }}
        >
          <Box
            id="pg-content-body"
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: "3px",
              p: 2,
              flexGrow: 1,
              height: "100%",
            }}
          >
            <Stack direction="row" sx={{ gap: 1 }}>
              <Chip
                label="Grammar"
                size="small"
                sx={{ bgcolor: pink[100], borderRadius: "3px" }}
              />
            </Stack>
            <Typography variant="h4" component="h2">
              {text}
            </Typography>
          </Box>
          <Box sx={{ alignSelf: "flex-start" }}>
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{ mt: "1em", width: "fit-content", borderRadius: "3px" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          id="pg-right"
          sx={{ flex: "0 0 auto", width: "240px", position: "relative" }}
        >
          <Box
            id="pg-right-content"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              overflow: "auto",
              pt: "24px",
              right: 0,
              top: 0,
            }}
          >
            <Box id="parameter-panel" sx={{ p: "0 24px 24px" }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                🤖
              </Typography>
              <Typography variant="h6" textAlign="center">
                Advance AI Tutoring
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Learn everything you can for any topic with your very own
                personal online AI tutor
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
