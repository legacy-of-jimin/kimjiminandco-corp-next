import React, { Component } from 'react'
import Head from "@/components/head";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Page from '@/components/hoc/page.js';
import HomeComponent from '@/components/home'

class Home extends React.Component {
  render() {
    return (<div id="root">
      <Head />
      <Nav />
      <HomeComponent />
      <Footer />
    </div>)
  }
}

export default Page(Home)