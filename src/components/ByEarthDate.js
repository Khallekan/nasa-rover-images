import { useRef, useState } from "react";
import axios from "axios";

const ByEarthDate = ({ max_date, cameras, setImages }) => {
  const [apiKey] = useState("api_key=KwKJE6zAyGjmjUcHugWB5jsLmtJZyUA3e0K4iOW7");
  const inputRef = useRef({ earth_date: null, cameras: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${apiKey}`;
    let { earth_date, cameras } = inputRef.current;
    earth_date = earth_date.value;
    cameras = cameras.value;

    if (earth_date) {
      url = `${url}&earth_date=${earth_date}`;
    }

    if (cameras) {
      url = `${url}&camera=${cameras}`;
    }

    try {
      const {
        data: { photos },
      } = await axios.get(url);
      if (photos) {
        return setImages(photos);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-general earth-form'>
      <div className='input-wrapper'>
        <label htmlFor='date' className='input-label'>
          Earth Date:{" "}
        </label>
        <input
          type='date'
          name='date'
          id='date'
          max={max_date}
          ref={(el) => (inputRef.current["earth_date"] = el)}
          className='input-cont'
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='camera' className='input-label'>
          Camera:{" "}
        </label>{" "}
        <select
          name='camera'
          id='camera'
          ref={(el) => (inputRef.current["cameras"] = el)}
          className='input-cont'
        >
          <option value='' defaultValue>
            None
          </option>
          {cameras.map(({ name }, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='form-btn'>
        Search!
      </button>
    </form>
  );
};

export default ByEarthDate;
