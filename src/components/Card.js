import React, { Fragment, useEffect, useState } from "react";

const Card = (props) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState("");
  const [video, setVideo] = useState(props.lecId);
  const [title, setTitle] = useState(props.name);
  // const { coursename } = useParams();
  const course = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${props.listId}&key=AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk`
    );
    const json = await data.json();
    //console.log(json);
    setData(json.items);
  };
  //console.log(data)
  const playlistname = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?id=${props.listId}&part=snippet&key=AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk`
    );
    const json = await res.json();
    console.log(json);
    setList(json?.items[0]?.snippet?.title);
  };

  useEffect(() => {
    course();
    playlistname();
    //eslint-disable-next-line
  }, []);

  const handleClick = (item) => {
    setTitle((crr) => (crr = item?.snippet?.title));
    setVideo((crr) => (crr = item?.snippet?.resourceId.videoId));
  };
  //console.log(video);
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-4 h-[30rem] px-10 overflow-scroll overflow-x-hidden">
          <div className="text-5xl ">
            <h1>{list}</h1>
          </div>
          {data &&
            data?.map((item) => {
              return (
                <div
                  className="flex cursor-pointer gap-1 hover:bg-gray-400 duration-100 p-2"
                  style={{ border: "1px solid gray" }}
                  onClick={() => handleClick(item)}
                  key={item.id}>
                  <div>
                    <h2>{item?.snippet?.title}</h2>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-1 px-4 flex-col">
          <iframe
            className="w-full h-[27rem]"
            src={"https://www.youtube.com/embed/" + video}
            title="Ecommerce Website Development Tutorial With MERN Stack, Razorpay, Redux, MUI &amp; Tailwind | Hindi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <div className="mt-4">{title}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
