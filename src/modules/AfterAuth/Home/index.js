import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Viewers from "../../../components/Viewers";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { setMovies } from "../../../store/slices/home";
import ImgSlider from "../../../components/ImgSlider";
import MovieComponent from "../../../components/MovieComponent"

const Home = () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.homeReducer);
  let movies = [];

  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    movies = [];
    querySnapshot.forEach((doc) => {
      movies = [...movies, { id: doc?.id, ...doc.data() }];
    });

    let groupingViaType = Object.values(
      movies.reduce((r, a) => {
        r[a.type] = r[a.type] ?? [];
        r[a.type].push(a);
        return r;
      }, [])
    );
    dispatch(
      setMovies({
        movies: groupingViaType,
      })
    );
  };

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {homeState?.movies &&
        homeState?.movies.map((data) => {
          return <MovieComponent movies={data} />;
        })}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
