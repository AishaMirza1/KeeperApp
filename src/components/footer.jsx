import React from "react";

function Footer() {
  const d = new Date();
  var year = d.getFullYear();

  return (
    <div className="copyright">
      <p>Copyright @ {year}</p>
    </div>
  );
}

export default Footer;
