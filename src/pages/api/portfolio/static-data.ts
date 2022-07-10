import { NextApiRequest, NextApiResponse } from "next";
import { PortfolioPageData } from "../../../utils/types";

export default function data(
  _: NextApiRequest,
  res: NextApiResponse<PortfolioPageData>
): void {
  res.status(200).json({
    header: {
      src: "/images/svg/undraw_collecting_fjjl.svg",
      text: "Portfolio",
    },
    projects: [
      {
        src: "/images/test-header.svg",
        title: "Limited Edition Toys",
        type: "Fully Custom Serverless Ecommerce Store",
        text: {
          lineOne:
            "Full fledged serverless ecommerce site built as a headless CMS integrated with Wordpress, WooCommerce, Vend Point of Sales system and the Square payment system. ",
          lineTwo:
            "Also includes fully custom user authorization and authentication. ",
          lineThree:
            "Written in Typescript using React (Next.js), styled using Emotion (JSX). ",
        },
        mobileText:
          "Built as a headless CMS integrated with Wordpress, WooCommerce, Vend Point of Sales system and the Square payment system, written in Typescript using React (Next.JS)",
        link: {
          demo: "https://limited-edition-toys.vercel.app/",
        },
      },
      {
        src: "/images/astoria-preview.png",
        title: "Project Astoria",
        type: "Custom built full-stack Ecommerce store",
        text: {
          lineOne:
            "Built in Typescript, the UI was done using React, Redux was used for state management and SCSS modules for styling. ",
          lineTwo:
            "Powered by a backend api made using node/express and a MySQL (mariaDB) database.",
          lineThree:
            "The store includes user login and registration, OAuth, and a custom integrated stripe payment system.",
        },
        mobileText:
          "Project Astoria is a completely custom built full-stack ecommerce store built in typescript. ",
        link: {
          demo: "https://project-astoria.vercel.app/",
          client:
            "https://github.com/leonardosimmons/project-astoria-front-end",
          server:
            "https://github.com/leonardosimmons/node-server/tree/master/src/servers/astoria",
        },
      },
      {
        src: "/images/nodejs.png",
        title: "Node Server",
        type: "Custom Server & RESTapi",
        text: {
          lineOne:
            "This is a general purpose server written in typescript using Node.js/Express. ",
          lineTwo:
            "The server at the moment serves mainly as an endpoint for custom made RESTapi's for all of my projects. ",
          lineThree:
            "Node server uses a custom MySQL (mariaDB) database to store and persist data across my projects and is hosted on Heroku. ",
        },
        mobileText:
          "This is a general purpose server written in typescript using Node.js/Express",
        link: {
          github: "https://github.com/leonardosimmons/node-server",
        },
      },
      {
        src: "/images/rustacean.png",
        title: "Rustache",
        type: "A TTL cache library ",
        text: {
          lineOne: "A TTL cache library written in rust. ",
        },
        mobileText: "A TTL cache library written in rust.",
        link: {
          github: "https://github.com/leonardosimmons/cache",
        },
      },
    ],
  });
}
