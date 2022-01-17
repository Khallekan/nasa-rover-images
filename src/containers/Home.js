import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={`main-container`}>
      <h1 className='main-title'>Mars Rover Photos</h1>
      <p className={`home-quote`}>
        “Space: the final frontier. These are the voyages of the starship
        Enterprise. Its continuing mission: to explore strange new worlds, to
        seek out new life and new civilizations, to boldly go where no one has
        gone before.”
        <span className='home-text_quote'>
          {" "}
          — Jean-Luc Picard, Star Trek, Star Trek: Encounter at Farpoint, Part 1{" "}
        </span>
      </p>
      <p className={`home-text`}>
        Our next door neighbor (140,000,000 miles away), Mars, the fourth planet
        from the sun has a wonderful story to tell and we do not know the half
        of it. To get more information about Mars or the red planet as it is
        sometimes referred to, spacecrafts have been deployed to explore the
        planet.
      </p>
      <p className={`home-text`}>
        These spacecrafts were called Rovers, Mars Rovers. The Mars Rovers were
        not the first NASA spacecraft to land on Mars. In fact, NASA had been
        sending probes to retrieve information on Mars' surface since the 1970s.
        The Rovers, however, have a very specific mission. Their job is to
        collect and catalog rocks that may tell us something about the history
        of water on Mars. Because of geologic and other evidence, we know that
        Mars once had water, but what happened to that water is a mystery. The
        answer can likely be found in the rocks which, just like Earth rocks,
        are shaped and changed by water over time. So, the Mars Rovers were
        designed to drive all over Mars, analyzing rocks and soils to search for
        clues about past water activity on this dry, red planet.{" "}
      </p>
      <p className={`home-text`}>
        The Mars Exploration Rover program began in 2003 with the launching of
        two Rovers, known as MER-A{" "}
        <Link to={`spirit`} className='home-text_link'>
          <strong>Spirit</strong>
        </Link>{" "}
        and MER-B
        <Link to={`opportunity`} className='home-text_link'>
          <strong> Opportunity</strong>
        </Link>
        . Though launched at the same time, Spirit touched down first, landing
        on Mars in January of 2004. Opportunity landed on the opposite side of
        the planet three weeks later.The exceptional performances of the Spirit
        and Opportunity Rovers provided NASA with way more data than they had
        expected. Just as importantly, these missions deeply impressed Congress
        and other groups with money, giving NASA the publicity they needed to
        build a new Rover. That Rover was{" "}
        <Link to={`curiosity`} className='home-text_link'>
          <strong>Curiosity</strong>
        </Link>
        , which left Earth in 2011 and landed on Mars in August of 2012. <br />
        Both{" "}
        <Link to={`spirit`} className='home-text_link'>
          <strong>Spirit</strong>
        </Link>{" "}
        and{" "}
        <Link to={`opportunity`} className='home-text_link'>
          <strong> Opportunity</strong>
        </Link>{" "}
        were designed to last for a 90-day mission (or 90 sols, as a Martian day
        is called; a sol is approximately 24 hours and 40 minutes long). The 90
        sols came and went, and both Spirit and Opportunity were still roving.
      </p>
      <p className={`home-text`}>
        The Mars Rovers were equipped with various cameras:
        <ul>
          <li>FHAZ - Front Hazard Avoidance Camera</li>
          <li>RHAZ - Rear Hazard Avoidance Camera</li>
          <li>MAST - Mast Camera</li>
          <li>CHEMCAM- Chemistry and Camera Complex</li>
          <li>MAHLI - Mars Hand Lens Imager</li>
          <li>MARDI - Mars Descent Imager</li>
          <li>NAVCAM - Navigation Camera</li>
          <li>PANCAM - Panoramic Camera</li>
          <li>MINITES - Miniature Thermal Emission Spectrometer (Mini-TES)</li>
        </ul>
      </p>
      <p className={`home-text`}>
        Now you can view what{" "}
        <Link to={`curiosity`} className='home-text_link'>
          <strong>Curiosity</strong>
        </Link>
        ,{" "}
        <Link to={`opportunity`} className='home-text_link'>
          <strong> Opportunity</strong>
        </Link>{" "}
        and{" "}
        <Link to={`spirit`} className='home-text_link'>
          <strong>Spirit</strong>
        </Link>{" "}
        saw on Mars.
      </p>
    </div>
  );
};

export default Home;
