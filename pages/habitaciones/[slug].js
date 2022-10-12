import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";

import { useEffect, useState } from "react";

import Layout from "../../components/Layout";

import client from "../../utils/client";
import { urlFor } from "../../utils/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function ProductScreen(props) {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const { slug } = props;
  const [index, setIndex] = useState(0);
  const [state, setState] = useState({
    cuarto: null,
    desk: null,
    loading: true,
    error: "",
  });
  const { cuarto, loading, error, desk } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cuarto = await client.fetch(
          `
              *[_type == "cuarto" && slug.current == $slug][0]`,
          { slug }
        );
        const desk = isDesktop ? cuarto?.image : cuarto?.image?.slice(0, 4);

        setState({ ...state, cuarto, loading: false, desk });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, [slug, isDesktop]);

  const img = cuarto?.image && urlFor(cuarto?.image[index]);
  return (
    <Layout title={"cuarto"}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Grid
          container
          spacing={0}
          className="notMargin"
          sx={{ mt: 2, ml: 0, mr: 0 }}
        >
          {" "}
          <Grid
            item
            md={7}
            xs={12}
            sm={12}
            pl={6}
            pr={isDesktop ? 0 : 6}
            maxWidth="100%"
          >
            <Box sx={{ display: isDesktop ? "none" : null }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{ mt: 0, color: "white", fontSize: "3rem" }}
              >
                <strong>{cuarto?.name}</strong>
              </Typography>
            </Box>

            <img
              src={img}
              width="100%"
              height={isDesktop ? "500px" : "300px"}
            />
            <Box>
              <div className="small-images-container">
                {desk?.map((item, i) => (
                  <img
                    key={item.key}
                    width={300}
                    height={300}
                    alt={item.name}
                    src={urlFor(item)}
                    className={
                      i === index ? "small-image selected-image" : "small-image"
                    }
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </div>
            </Box>
          </Grid>
          <Grid item md={5} xs={12} sm={12} pl={6} pr={6}>
            <Box sx={{ display: isDesktop ? null : "none" }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{ mt: 0, color: "white", fontSize: "3rem" }}
              >
                <strong>{cuarto?.name}</strong>
              </Typography>
            </Box>

            <Divider />
            <Typography
              variant="text"
              component="text"
              sx={{ mt: 1, color: "white" }}
            >
              hen an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Box
              sx={{
                p: 4,
                border: "5px solid white",
                color: "white",
                mt: 5,
                maxWidth: "100%",
              }}
            >
              <Typography variant="text" component="text" sx={{ mb: 10 }}>
                <strong> Comodidades:</strong>{" "}
              </Typography>
              <Grid container spacing={5} mt={1}>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> Cocina
                </Grid>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> Cocina Plancha
                </Grid>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> Cocina Bano
                </Grid>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> CocinaTelevisor
                </Grid>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> Cocina Caja Fuerte
                </Grid>
                <Grid item md={6} className="notPt">
                  <FiberManualRecordIcon fontSize="" /> Cocina Escritorio
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
