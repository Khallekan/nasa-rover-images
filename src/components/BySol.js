import { useRef, useState } from "react";
import axios from "axios";

const BySol = ({ max_sol, cameras, setImages }) => {
  const [apiKey] = useState("api_key=KwKJE6zAyGjmjUcHugWB5jsLmtJZyUA3e0K4iOW7");
  const inputRef = useRef({ sol: null, cameras: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${apiKey}`;
    let { sol, cameras } = inputRef.current;
    sol = sol.value;
    cameras = cameras.value;

    if (sol) {
      url = `${url}&sol=${sol}`;
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
    <form onSubmit={handleSubmit} className='form-general sol-form'>
      <div className='input-wrapper'>
        <label htmlFor='sol' className='input-label'>
          Sol:{" "}
        </label>
        <input
          type='number'
          name='sol'
          id='sol'
          min='0'
          max={max_sol}
          ref={(el) => (inputRef.current["sol"] = el)}
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

export default BySol;
