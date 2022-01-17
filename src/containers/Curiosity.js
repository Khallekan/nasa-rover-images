import { useCallback, useEffect, useState } from "react";
import CameraName from "../components/CameraName";
import { initialManifest } from "../assets/data";
import axios from "axios";

const Curiosity = () => {
  const [apiKey] = useState("api_key=7KYalu6ifNMQJ12xew85Ytqyf0crQELBPh08i7WP");
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
      <form method='get'>
        <input type='date' name='date' id='date' max={max_date} />
        <select name='camera' id='camera'>
          <option value='' selected>
            None
          </option>
          {cameras.map(({ name }, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Curiosity;
