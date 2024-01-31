import React from "react";
import "./index.scss";
import dayjs from "dayjs";
import Img from "../Img/Img";
import Image from "../../assets/image5.png";
import { useNavigate} from "react-router-dom";
const MovieCard = ({ data }) => {
    const navigate = useNavigate();
    const image = data?.show?.image?.original;
    const id=data?.show?.id;
    const gotoMovie = () => {
        navigate(`/movie/${id}`);
    };
    return (
        <div className="movieCard">
            <div className="posterBlock" onClick={gotoMovie}>
                <Img className="posterImg" src={image?image:Image} />
            </div>
            <div className="textBlock">
                <span className="title">{data?.show?.name}</span>
                <span className="date">
                    {dayjs(data?.show?.premiered).format("MMM DD, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;