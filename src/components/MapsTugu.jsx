import React from "react";

const MapEmbed = ({ height }) => {
  return (
    <div className="w-full flex justify-end bg-darkYellow mt-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.810488949508!2d109.31416627804167!3d-7.5827594942196805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654518238ba48b%3A0xe773e57e1e89a5b!2sTUGU%20DUREN%20Alasmalang!5e1!3m2!1sid!2sid!4v1732981690777!5m2!1sid!2sid"
        width="95%"
        className="md:h-[400px] lg:h-[450px] h-[200px] "
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
