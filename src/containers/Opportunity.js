import { useCallback, useEffect, useState } from "react";
import CameraName from "../components/CameraName";
import { initialManifest } from "../assets/data";
import axios from "axios";

const Opportunity = () => {
  const [apiKey] = useState("api_key=KwKJE6zAyGjmjUcHugWB5jsLmtJZyUA3e0K4iOW7");
  const [roverManifest, setRoverManifest] = useState(initialManifest);

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
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/?${apiKey}`;
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
            {cameras.map(({ name, full_name }) => (
              <CameraName name={name} full_name={full_name} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Opportunity;
