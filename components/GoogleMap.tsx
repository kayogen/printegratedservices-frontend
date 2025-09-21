import React from "react";

export default function GoogleMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94439.29480461011!2d-83.002882!3d42.295001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326a002d52a28dd%3A0xe996da99bee642d0!2sP%26R%20Integrated%20services!5e0!3m2!1sen!2sin!4v1758414336394!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, width: "100%", height: "450px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
