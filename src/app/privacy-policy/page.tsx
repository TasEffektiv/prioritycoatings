import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Privacy Policy | Priority One Coatings",
  description:
    "Read the privacy policy for Priority One Coatings, Sydney's trusted painting & decorating company, and how we collect, use and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Privacy Policy" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              Priority One Coatings - Privacy Policy
            </h2>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Privacy Policy</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              This Privacy Policy describes our policies and procedures regarding the collection,
              use, and disclosure of your information when you use the Service and tells you about
              your privacy rights and how the law works for your protection.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We use your personal data to provide and improve services. By using the Service, you
              consent to the collection and use of information in accordance with this Privacy
              Policy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Priority One Coatings (ABN number &mdash; 51 079 204 667) is committed to providing
              quality services to you. This policy describes our ongoing obligations to you
              regarding how we handle your personal information.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We have applied the Australian Privacy Principles (APP) contained in the Privacy Act
              1988 (Cth) (Privacy Act). NPPs govern how we collect, use, disclose, store, secure
              and handle your personal information.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              A copy of the Australian Privacy Principles can be obtained from the Australian
              Information Commissioner&rsquo;s Office website at{" "}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline"
              >
                www.oaic.gov.au
              </a>
              .
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              What is Personal Information and why do we collect it?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Personal information is information or an opinion that identifies an individual. We
              collect personal information, including name, address, email address, phone, and
              trade/business name.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              This personal information is only obtained through a web form integrated into our
              website https://www.prioritycoatings.com.au/. Note that we also use Google Analytics
              to track data about users of our website and may store cookies on your computer. We
              collect your personal information for the primary purpose of providing our services
              to you, providing information to customers and marketing. We may also use your
              personal data for secondary purposes closely related to the primary purpose and
              those who need your information to carry out the intended processing purposes. You
              can unsubscribe from our mailing/marketing lists at any time by contacting us via
              email.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              When we collect personal information, we take the security of your personal
              information very seriously. Therefore, where appropriate or possible, we explain why
              we collect the information and how we intend to use it.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Sensitive information
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              In privacy law, sensitive information includes information or opinions about an
              individual&rsquo;s racial or ethnic origin, political opinions, major association
              membership, political, religious or philosophical beliefs, union or other
              professional body membership, criminal record or health information.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We will only use sensitive information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-brand-ink marker:text-black">
              <li>For the primary purposes for which it was obtained</li>
              <li>For sub-goals that are directly related to the main objective</li>
              <li>Secure your consent; or as required or permitted by law.</li>
            </ul>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Third Parties</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Where reasonable and practicable, we will only collect your personal information
              from you. However, in some instances, we may share your personal information with
              the third parties we send newsletters to, such as Little Marketing &amp; Mail Chimp.
              In such a case, we will take reasonable steps to ensure that you are aware of the
              information provided to us by the third party. Disclosure of personal information
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Your personal information will never be shared or sold with third parties.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Exceptions to this are mentioned below:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-brand-ink marker:text-black">
              <li>Third parties whose uses or disclosures you agree to; and</li>
              <li>When required or permitted by law.</li>
            </ul>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Security of Personal Information
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We store this data in our email. We also print hard copies that we keep in a
              cupboard in our secure facility.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Your personal information is stored in our CRM system with limited access to
              reasonably protect it from misuse and loss and unauthorised access, modification or
              disclosure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              When your personal information is no longer needed for the purposes for which it was
              obtained, we will take reasonable steps to destroy or permanently anonymise your
              personal information. However, most personal information is or will be stored in
              customer files which we will keep for a minimum of 7 years.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Retention of Your Personal Information
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The company will only retain your personal data for as long as is necessary for the
              purposes outlined in this Privacy Policy. We will retain and use your data as
              necessary to comply with our legal obligations (for example, if we are required to
              retain your data to comply with applicable law), resolve disputes and enforce our
              legal agreements and policies.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data
              is generally kept for a shorter period, except when that data is used to enhance
              security or improve our services&rsquo; functionality or when we are required to
              retain that data for a longer period legally.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Transfer of Your Personal Information
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Your information, including Personal Data, is processed at the Company&rsquo;s
              executive offices and any other location where the parties involved in the
              processing are located. This means that such information may be transferred to and
              maintained on computers located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may apply, different from the
              laws of your jurisdiction. Upon submitting such information, your consent to this
              Privacy Policy represents your consent to such transfer.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The Company will take all steps reasonably necessary to ensure that your data is
              handled securely and in accordance with this Privacy Policy, and there will be no
              transfer of your Personal Data to an organization or country unless appropriate
              controls are in place, including the security of Your data and other personal
              information.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Policy Updates</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              This Policy may change from time to time and is available on our website.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Privacy Policy Complaints and Enquiries
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              If you have any queries or complaints about our Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Priority One Coatings
              <br />
              Office Address: Unit 7, 46-48 Buffalo Road, Gladesville NSW 2111
              <br />
              Postal Address: P.O. Box 3413, Putney NSW 2112
              <br />
              Phone:{" "}
              <a href="tel:+0298085900" className="text-brand-teal hover:underline">
                02 9808 5900
              </a>
              <br />
              Fax: 02 9808 5177
              <br />
              Email:{" "}
              <a
                href="mailto:jenny@prioritycoatings.com.au"
                className="text-brand-teal hover:underline"
              >
                jenny@prioritycoatings.com.au
              </a>
              ,{" "}
              <a
                href="mailto:danny@prioritycoatings.com.au"
                className="text-brand-teal hover:underline"
              >
                danny@prioritycoatings.com.au
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
