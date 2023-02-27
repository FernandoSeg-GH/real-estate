import React from 'react';

const Hubspot = () => {
  return (
    <>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/27004540.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            hs.beacon.ready(function() {
              hs.beacon.identify({
                ...
              });
            });
          `,
        }}
      />
    </>
  );
};

export default Hubspot;
