import { useHubspotForm } from 'next-hubspot';

const HubspotForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '27004540',
        formId: 'd3eebe7c-97a6-48ca-9c26-5a68604f291f',
        target: '#hubspot-form-wrapper'
    });

    return (
        <div>
            <div id="hubspot-form-wrapper" />
            <style>{`
                .hs-form label {color: #ffffff !important;}
            `}</style>
        </div>
    )
}

export default HubspotForm;
