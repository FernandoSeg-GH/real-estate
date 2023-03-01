import { useState, useEffect } from "react";

const HubspotForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    script.async = true;
    script.onload = () => setLoading(false);
    document.body.appendChild(script);
  }, []);

  return (
    <div>
        <h1>TEST</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hsforms.net/forms/embed/v2.js"
          ></script>
          <script
            type="text/javascript"
            region="eu1"
            dangerouslySetInnerHTML={{
              __html: `
              hbspt.forms.create({
                portalId: "27004540",
                formId: "d3eebe7c-97a6-48ca-9c26-5a68604f291f",
                onFormSubmit: function($form) {
                  console.log("Form submitted");
                }
              });
            `,
            }}
          />
          <div id="hubspotForm"></div>
        </div>
      )}
    </div>
  );
};


export default HubspotForm;
