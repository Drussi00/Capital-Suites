import { CircularProgress, Alert, Box } from "@mui/material";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Orlando from "../components/Orlando";
import Habitaciones from "../components/Habitaciones";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });

  const { loading, error } = state;

  useEffect(() => {
    setState({ loading: false });
  }, []);

  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Box>
          <Box
            sx={{
              paddingBottom: "50px",
              backgroundColor: "#CCAE93",
            }}
          >
            <Box>
              <Banner />
            </Box>
            <Box
              sx={{
                paddingTop: "50px",
              }}
            >
              <Categories />
            </Box>
            <Box paddingTop={10}>
              <Habitaciones />
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "white" }}>
            <Orlando />
          </Box>
        </Box>
      )}
    </Layout>
  );
}