import { TbExternalLink } from "react-icons/tb";

function CardWeather({ city }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    city
  )}&output=embed`;

  const handleClick = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      city
    )}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="w-87 h-[310px] bg-[#F9FAFB] border border-gray-200 rounded-2xl shadow-lg overflow-hidden mt-6 sm:mt-6 mb-5 sm:mb-0">
      <iframe
        title={`Map of ${city}`}
        src={mapSrc}
        width="100%"
        height="100%"
        className="rounded-2xl border-none"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default CardWeather;
