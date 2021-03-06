import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ResponsivePlayer } from '../components/ResponsivePlayer'
import CardVid from '../components/cardVid'
import Header from '../components/header'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import '../components/Header.css'

const SecondPage = ({data}) => (
  <Layout>
    <div className="container flareLayout">
      <Seo title="Flare" />
      <Header styling="HeaderGroup" />
      <GatsbyImage className="FlareLogo" alt={data.flareLogo.tag}  image={data.flareLogo.img.gatsbyImageData}/>
      {data.allContentfulGif.nodes.filter(({contentfulid}) => contentfulid).reverse().map(node => (
        <CardVid key={node.id} credits={"https://www.instagram.com/" + node.tag} igtag={"@" + node.tag} vid={"https:" + node.img.file.url} />
      ))}
      <div className="heroTitles" id="harrisonVid">
        <ResponsivePlayer playsinline key={data.flareVideo.tag} url={"https:" + data.flareVideo.img.file.url} />
      </div>
    <footer style={{color: 'white'}}>
    <h3>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
    </h3>
    </footer>
    </div>
  </Layout>
);

export const query = graphql`
{
  allContentfulGif(filter: {contentfulid: {gte: 0}}) {
    nodes {
      id
      tag
      contentfulid
      img {
        title
        file {
          url
        }
        gatsbyImageData
      }
    }
  }
  flareLogo: contentfulGif(tag: {eq: "flare-logo"}) {
    id
    tag
    img {
      title
      gatsbyImageData
    }
  }
  flareVideo: contentfulGif(tag: {eq: "flare-video"}) {
    id
    tag
    img {
      title
      file {
        url
      }
    }
  }
}`

export default SecondPage;