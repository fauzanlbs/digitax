import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
