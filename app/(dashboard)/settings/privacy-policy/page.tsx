import PolicyEditor from "../_components/PolicyEditor";

const initialContent = `<p>lacus nulla eu netus pretium. Pellentesque scelerisque tellus nisi eu nisl sed senectus nunc. Porta sollicitudin vel elit varius nulla sit diam sed. Bibendum elit facilisi nulla viverra augue pellentesque gravida morbi.</p><p>Diam pellentesque orci eget gravida cursus. Ut ut nulla sapien eget vitae at eget pretium. Tristique nibh ipsum iaculis quam. Vestibulum magna cursus facilisis adipiscing cras dui. Risus auctor faucibus orci tortor tristique elit.</p><p>Purus ut congue ornare id sed. Enim libero tincidunt facilisis non facilisis mattis praesent. Magna volutpat at cras urna adipiscing vitae velit enim volutpat. Ac tincidunt et sed dolor ipsum.</p>`;

export default function PrivacyPolicyPage() {
  return <PolicyEditor title="Privacy Policy" initialContent={initialContent} />;
}
