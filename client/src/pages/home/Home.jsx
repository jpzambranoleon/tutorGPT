import { Laptop } from "@mui/icons-material";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  styled,
  Toolbar,
  Typography,
  ButtonBase,
  Grid,
  Stack,
  Button,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";
import { blue, pink } from "@mui/material/colors";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" textAlign="center">
          TutorGPT Helps You
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          fontWeight={500}
          gutterBottom
        >
          Learn Any School Topic
        </Typography>
        <Container maxWidth="md" sx={{ my: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                🧠
              </Typography>
              <Typography variant="h6" textAlign="center">
                Improve Your Knowledge
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Finish your assignments quicker with
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                🎒
              </Typography>
              <Typography variant="h6" textAlign="center">
                Simple Studying Tips
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Study smarter not harder with our study tips
              </Typography>
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Divider />
            <CardActionArea sx={{ p: "5px" }}>
              <Typography fontWeight={500}>🏠 Home</Typography>
            </CardActionArea>
            <CardActionArea sx={{ p: "5px" }}>
              <Typography fontWeight={500}>⚙️ Settings</Typography>
            </CardActionArea>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="130"
                      image="/static/images/card/english.jpg"
                      alt="english"
                    />
                    <CardContent>
                      <Typography
                        textAlign="left"
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        ✍️ English
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip
                          size="small"
                          label="Grammar"
                          sx={{
                            borderRadius: "3px",
                            bgcolor: pink[100],
                          }}
                        />
                        <Chip
                          size="small"
                          label="Chip Outlined"
                          variant="outlined"
                        />
                      </Stack>
                      <Typography
                        textAlign="left"
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="130"
                      image="/static/images/card/math.jpg"
                      alt="math"
                    />
                    <CardContent>
                      <Typography
                        textAlign="left"
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        🧮 Math
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip size="small" label="Chip Filled" />
                        <Chip
                          size="small"
                          label="Chip Outlined"
                          variant="outlined"
                        />
                      </Stack>
                      <Typography
                        textAlign="left"
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="130"
                      image="/static/images/card/science.jpg"
                      alt="science"
                    />
                    <CardContent>
                      <Typography
                        textAlign="left"
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        🔬 Science
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip size="small" label="Chip Filled" />
                        <Chip
                          size="small"
                          label="Chip Outlined"
                          variant="outlined"
                        />
                      </Stack>
                      <Typography
                        textAlign="left"
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="130"
                      image="/static/images/card/history.jpg"
                      alt="history"
                    />
                    <CardContent>
                      <Typography
                        textAlign="left"
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        🏺 History
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip size="small" label="Chip Filled" />
                        <Chip
                          size="small"
                          label="Chip Outlined"
                          variant="outlined"
                        />
                      </Stack>
                      <Typography
                        textAlign="left"
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
