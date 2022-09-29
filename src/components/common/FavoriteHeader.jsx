import { push } from 'connected-react-router';
import React from 'react'
import { useDispatch } from 'react-redux';
import logo from "../../assets/img/TRAVEL-BUG-Logo.png";
import "../../assets/Home.css";

export default function FavoriteHeader() {
 const dispatch=useDispatch()
  return (
    <>
      {" "}
      <section class="header">
        <section class="navigation">
          <img src={logo} alt="" />
          <div class="navbar">
            <a
              href=""
              class="Home"
              onClick={() => {
                dispatch(push("/"));
              }} style={{color:'black'}}
            >
              HOME
            </a>
            <a href="">WONDERS IN USA</a>
            <a href="">TOURIST ATTRACTION</a>
            <a
              href=""
              onClick={() => {
                dispatch(push("/favorite"));
              }}
              style={{ color: "blue" }}
            >
              FAVORITE
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
