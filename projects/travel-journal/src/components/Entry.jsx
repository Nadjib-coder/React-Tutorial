/* eslint-disable react/prop-types */
export default function Entry(props) {
  const { locationIcon } = props;
  return (
    <>
      <article className="container entry">
        <img
          className="mountain-image"
          src={props.img.src}
          alt={props.img.alt}
        />
        <div>
          <div className="location">
            <img
              className="location-icon"
              src={locationIcon}
              alt="Location icon"
            />
            <span className="country-name">{props.country}</span>
            <a
              className="location-link"
              href={props.googleMapsLink}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="location-name">{props.title}</h1>
          <p className="date">{props.dates}</p>
          <p className="content">{props.text}</p>
        </div>
      </article>
    </>
  );
}
