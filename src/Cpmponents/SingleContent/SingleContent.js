import React from "react";
import { img_300, unavailable } from "../../config/Config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div>
      {/* Content Modal Container */}
      <ContentModal media_type={media_type} id={id}>
        {/* Badge Component to show vote average */}
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "success"}
        />

        {/* Poster Image */}
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />

        {/* Title */}
        <b className="title">{title}</b>

        {/* Subtitle for media type and date */}
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movies"}
          <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    </div>
  );
};

export default SingleContent;
