import React, { Component } from "react";
import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

export default class Feed extends Component {
  state = {
    feed: []
  };
  async compoenetDidMount() {
    const response = await api.get("posts");
    this.setState({ feed: response.data });
  }
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Diego Fernandes</span>
              <span className="place">Rio do Sul</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/IMG_0001.jpg" alt="Bonitão" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>

            <p>
              Um post muito bacana
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}
