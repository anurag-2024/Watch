import React, { useState } from "react";
import dayjs from "dayjs";
import "./index.scss";
import Image from "../../assets/image5.png";
import ContentWrapper from "../ContentWrapper/ContentWrappper";
import Img from "../Img/Img";
import CircleRating from "../circlerating/CircleRating";
import Genre from "../Genre/genre";
import {useParams, useNavigate } from "react-router-dom";
const DetailsBanner = ({data}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const image = data?.show?.image?.original;
    const summary = data?.show?.summary.slice(3).slice(0, -4);
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    const token=localStorage.getItem("token");
    const handlebook=()=>{
        if(token){
            navigate(`/movie/${id}/book`);
        }
        else{
            alert("Please Login First");
            navigate(`/login`);
        }
    }
    return (
        <div className="detailsBanner">
                <>
                    {!!data && (
                        <React.Fragment>
                        <ContentWrapper>
                            <div className="content">
                                <div className="left">
                                     <Img className="posterImg" src={image?image:Image} />
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {`${data?.show?.name} (${dayjs(data?.show?.premiered).format("YYYY")})`}
                                    </div>
                                    <Genre data={data?.show?.genres} />
                                    <div className="row">
                                        <CircleRating rating={data?.show?.rating?.average?.toFixed(1)} />
                                    </div>
                                    <div className="overview">
                                        <div className="heading">Overview</div>
                                        <div className="decription">{summary}</div>
                                    </div>
                                    <div className="info">
                                        {data?.show?.status && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Status:{""}
                                                </span>
                                                <span className="text">
                                                    {data?.show?.status}
                                                </span>
                                            </div>
                                        )}
                                        {data?.show?.premiered && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Release Date:{""}
                                                </span>
                                                
                                                <span className="text">
                                                    {dayjs(data?.show?.premiered).format("MMM DD, YYYY")}
                                                </span>
                                            </div>
                                        )}
                                        {data?.show?.runtime && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Runtime:{""}
                                                </span>
                                                <span className="text">
                                                    {toHoursAndMinutes(data?.show?.runtime)}
                                                </span>
                                            </div>
                                        )}
                                        
                                    </div>

                                    <button className="btn" onClick={handlebook}>Book Ticket Now</button>
                                </div>
                            </div>
                        </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
        </div>
    );
};

export default DetailsBanner;