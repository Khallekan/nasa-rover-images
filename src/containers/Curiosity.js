import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavLink from "../components/NavLink";
import CameraName from "../components/CameraName";
import BySol from "../components/BySol";
import ByEarthDate from "../components/ByEarthDate";
import { initialManifest } from "../assets/data";
import axios from "axios";

const Curiosity = () => {
  const [apiKey] = useState("api_key=KwKJE6zAyGjmjUcHugWB5jsLmtJZyUA3e0K4iOW7");
  const [roverManifest, setRoverManifest] = useState(initialManifest);
  const [images, setImages] = useState([]);

  console.log(images);

  console.log(images);

  let {
    name,
    status,
    cameras,
    landing_date,
    launch_date,
    max_date,
    max_sol,
    total_photos,
  } = roverManifest;

  const fetchManifest = useCallback(async () => {
    try {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?${apiKey}`;
      const {
        data: { rover },
      } = await axios.get(url);
      if (rover) {
        setRoverManifest({ ...rover });
      }
    } catch (error) {
      console.log(error);
    }
  }, [apiKey, setRoverManifest]);

  useEffect(() => {
    // console.log(inputRef.current.earth_date.value());
    fetchManifest();
  }, [fetchManifest]);

  return (
    <div className={`main-container`}>
      <div className={`home-text`}>
        <ul className={`rover-manifest`}>
          <li className='rover-manifest_item'>Name of Rover: {name}</li>
          <li className='rover-manifest_item'>Status: {status}</li>
          <li className='rover-manifest_item'>Launch Date: {launch_date}</li>
          <li className='rover-manifest_item'>Landing Date: {landing_date}</li>
          <li className='rover-manifest_item'>Max Date: {max_date}</li>
          <li className='rover-manifest_item'>
            Number of Sols: {max_sol.toLocaleString()}
          </li>
          <li className='rover-manifest_item'>
            Number of photos available: {total_photos.toLocaleString()}
          </li>
          <li className='rover-manifest_item'>
            Cameras:{" "}
            {cameras.map(({ name, full_name }, index) => (
              <CameraName key={index} name={name} full_name={full_name} />
            ))}
          </li>
        </ul>
      </div>
      <div className='search-routes'>
        <NavLink
          className={`header-nav_item-link search-route_item`}
          activeClassName={`header-nav_item-link_active`}
          to={`sol`}
          text={`Search by sol`}
        />
        <NavLink
          className={`header-nav_item-link search-route_item`}
          activeClassName={`header-nav_item-link_active`}
          to={`earth-date`}
          text={`Search by earth date`}
        />
      </div>
      <Routes>
        <Route
          index
          element={
            <div className='home-text text-center'>
              How will you like to search for pictures?
            </div>
          }
        />
        <Route
          path={`sol`}
          element={
            <BySol max_sol={max_sol} cameras={cameras} setImages={setImages} />
          }
        />
        <Route
          path={`earth-date`}
          element={
            <ByEarthDate
              max_date={max_date}
              cameras={cameras}
              setImages={setImages}
            />
          }
        />
      </Routes>
      <div>
        {images.length > 0 && (
          <div>
            {images.map(
              ({
                id,
                img_src,
                sol,
                rover: { name: roverName },
                camera: { full_name, name: cameraName },
              }) => (
                <div>{id}</div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Curiosity;
