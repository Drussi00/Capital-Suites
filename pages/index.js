import { CircularProgress, Alert, Box } from "@mui/material";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Orlando from "../components/Orlando";
import Habitaciones from "../components/Habitaciones";
import client from "../utils/client";

export default function Home() {
  const [state, setState] = useState({
    cuarto: [],
    error: "",
    loading: true,
  });

  const { loading, error, cuarto } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cuarto = await client.fetch(`*[_type == 'cuarto']`);
        setState({ ...state, loading: false, cuarto });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
              <Habitaciones id="suites" cuartosH={cuarto} />
            </Box>
          </Box>
          <Box id="orlando" sx={{ backgroundColor: "white", pb: 5 }}>
            <Orlando />
          </Box>
        </Box>
      )}
    </Layout>
  );
}
