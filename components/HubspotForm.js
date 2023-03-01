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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hsforms.net/forms/v2.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              hbspt.forms.create({
                portalId: "YOUR_PORTAL_ID",
                formId: "YOUR_FORM_ID",
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