"use server";
import React from "react";
import MenuItem from "./MenuItem";
import nextConfig from "@/next.config.mjs";

const Menu = async () => {
  const menu = await fetch(`${nextConfig.env.NEXT_PUBLIC_APP_URL}/api/menu`)
    .then((data) => data.json())
    .then((data) => data.results);

  return (
    <div className="container">
      <div className="content">
        <h2 className="title is-size-2 has-text-centered block">Menu</h2>
      </div>
      {menu.length > 0 ? (
        <div className="is-flex-tablet is-flex-wrap-wrap is-justify-content-space-evenly">
          {menu.map((dish) => {
            return (
              <MenuItem
                key={dish.id}
                id={dish.id}
                title={dish.title}
                description={dish.description}
                img={dish.image}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
