import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

import { useEffect, useState } from "react";

import Layout from "../../components/Layout";

import client from "../../utils/client";
import { urlFor } from "../../utils/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function ProductScreen(props) {
  const { slug } = props;
  const [state, setState] = useState({
    cuarto: null,
    loading: true,
    error: "",
  });
  const { cuarto, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cuarto = await client.fetch(
          `
              *[_type == "cuarto" && slug.current == $slug][0]`,
          { slug }
        );
        setState({ ...state, cuarto, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, [slug]);
  const img = cuarto?.image && urlFor(cuarto?.image[0]);
  return (
    <Layout title={"cuarto"}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Grid
          container
          spacing={4}
          className="notMargin"
          sx={{ mt: 2, ml: 0, mr: 0 }}
        >
          {" "}
          <Grid item md={7}>
            <img src={img} width="100%" height="500px" />
          </Grid>
          <Grid item md={4} width="100%">
            <Typography
              variant="h1"
              component="h1"
              sx={{ mt: 0, color: "white", fontSize: "3rem" }}
            >
              <strong>{cuarto?.name}</strong>
            </Typography>

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
              sx={{ p: 4, border: "5px solid white", color: "white", mt: 5 }}
              width="100%"
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
