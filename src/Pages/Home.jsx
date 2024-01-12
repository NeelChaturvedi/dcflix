import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title="Now Playing" fetchURL={requests.requestNowPlaying} />
        <Row rowID='2' title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID='3' title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowID='4' title="Action" fetchURL={requests.requestAction} />
        <Row rowID='5' title="Comedy" fetchURL={requests.requestComedy} />
        <Row rowID='6' title="Horror" fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home