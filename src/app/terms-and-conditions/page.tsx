import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Terms and Conditions | Priority One Coatings",
  description:
    "Read the website terms and conditions for Priority One Coatings, Sydney's trusted painting & decorating company.",
};

export default function TermsAndConditionsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Terms and Conditions" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              Priority One Coatings- Terms and Conditions
            </h2>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Website Terms and Conditions
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Your privacy is very important to Priority One Coatings. To better protect your
              privacy, we provide this notice explaining our online information practices and the
              choices you can make about how your information is collected and used. To make this
              notice easier to find, we provide it via a link in the footer of each page of our
              website.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              This policy explains when and why we collect personal information about the people
              who visit our website, how we use that information, the conditions under which we
              may disclose it to others, and how we keep it secure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We may change this policy from time to time, so please check this page from time to
              time. By using our website, you agree to be bound by this policy.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Use</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The website is made available to you upon your acceptance and compliance with these
              terms and conditions. You agree to use this website in accordance with all
              applicable local, state, national and international laws, rules and regulations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              You agree not to use, or permit or authorize any third party to use the site for any
              illegal, defamatory, harassing, abusive, deceptive or obscene purposes or in any
              manner in any other way or in a manner that conflicts with the Website or the
              Service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              If you contribute to our forums (if any) or make any public comments on this website
              that we deem illegal, libellous, harassing, abusive, deceptive or sexually explicit,
              obscene or inappropriate or in conflict with the website or the Services offered, we
              may, at our discretion, refuse to publish these comments or remove them from the
              site.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We reserve the right to refuse or terminate service to anyone at any time without
              notice or reason.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              13 years old and under
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Protecting children&rsquo;s privacy is especially important. For this reason, we
              never collect or maintain information on our website from anyone we know under the
              age of 13, and no part of our website is structured to attract anyone under the age
              of 13.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Compensation for loss or damage
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              You agree to indemnify and hold us harmless from any liability or expense arising
              out of or in any way related to your use of this website or the services or
              information provided on this website, including any liability or expense arising
              from all claims, loss, damage (actual and consequential), litigation, judgment,
              court costs and attorneys&rsquo; fees of any kind and nature borne by you or third
              parties.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Intellectual property and copyright
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We own the copyright to the content of this website, including all uploaded files,
              layout designs, data, graphics, articles, file contents, code, news, tutorials,
              videos, reviews, forum posts and databases contained on the website or in connection
              with the services. You may not use or reproduce our copyrighted material other than
              as permitted by law. In particular, you may not use or copy our copyrighted material
              for commercial purposes unless we expressly agree, in which case we may require you
              to sign a license agreement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              If you wish to use our content, images or other intellectual property, you must send
              your request to us at the following e-mail address:{" "}
              <a
                href="mailto:jenny@prioritycoatings.com.au"
                className="text-brand-teal hover:underline"
              >
                jenny@prioritycoatings.com.au
              </a>
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Trademarks</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The trademarks and logos contained on this Website are trademarks of Priority One.
              Use of these trademarks is strictly prohibited except with our express, written
              consent.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Links to external websites
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              This website may contain links that lead you to this website. These links are
              provided for your convenience and do not constitute an express or implied
              endorsement or approval of the linked website, its content or any other website,
              product or service which is linked. We are not liable for any loss or damage
              resulting from or in connection with your use of these websites.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              You can link to our website. However, you may not provide any link suggesting any
              link, approval or endorsement on our part of your site unless expressly agreed to by
              us in writing. We may withdraw our consent to your login to our website at any time
              by sending you a notice.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Limitation of Liability
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We are not responsible for the accuracy of the content or statements contained on
              this website or in connection with our services. Statements are made for general
              comment only, and you should ensure their accuracy. In addition, all of our Services
              are provided without warranties except for any warranties provided by law. We are
              not responsible for any damages incurred as a result of or in connection with the
              use of our website or services.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Cookies and web beacons
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Our website, https://www.prioritycoatings.com.au/, uses Google Analytics and the
              Google Ads tracking code. Cookies associated with these codes help us measure the
              performance of our website and advertisements. By using our website, you consent to
              our use of Google Analytics and Google Ads tracking codes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We may use cookies on our website from time to time. Cookies, by themselves, do not
              tell us your locations, email address or other personally identifiable information.
              However, they allow third parties, such as Google and Facebook, to display our ads
              on your social media and online media feeds as part of promotional or marketing
              campaigns. If and when you choose to provide personal information to our website,
              that information may be linked to data stored in cookies. We may use web beacons
              (also known as Clear GIFs) on our website from time to time, which are small pieces
              of code placed on websites to track visitor behaviour and collect data about
              visitors viewing the website. For instance, web beacons can be used to count users
              visiting a website or send cookies to the browser of a visitor viewing that
              particular page.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Information Collection
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Use of information that you provide to us or that we have collected and maintained
              in connection with your use of the website or our services is governed by our
              Privacy Policy. By using this website and the services linked to this website, you
              agree to the privacy policy. Click the privacy policy link to review our privacy
              policy and learn more about why we collect personal information from you and how we
              use it.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Confidentiality</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              All personal information you provide to us will be kept confidential in accordance
              with our Privacy Policy. However, due to circumstances beyond our control, we cannot
              guarantee that all aspects of your use of this website will be secure due to the
              possibility that third parties may block and access this information.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">
              Changes to Our Privacy Policy
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Our policy is to post any changes we make to our privacy policy on this page.
              Suppose we make material changes to how we handle users&rsquo; personal information.
              In that case, we will notify you by email to the email address specified in your
              account and through the notice on the website&rsquo;s homepage. The date the Privacy
              Policy was last modified is identified at the top of the page. It is your
              responsibility to ensure that we have a working email address and can provide you
              with updates periodically visit our website and this Privacy Policy to check for any
              change.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Data Security</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We have implemented measures designed to protect your personal information against
              accidental loss and unauthorized access, use, modification and disclosure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              The safety and security of your information also depend on you. Once we have given
              you (or where you have chosen) a password to access certain parts of our website,
              you are responsible for keeping this password confidential. We ask that you do not
              share your password with anyone.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              Unfortunately, the transmission of information over the internet is not completely
              secure. Although we will do our best to protect your personal data, we cannot
              guarantee the security of your personal information transmitted to our website. Any
              transmission of personal information is at your own risk. We are not responsible for
              violating any privacy settings or security measures on the website.
            </p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-black">Governing Law</h3>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              These terms and conditions are governed by and construed in accordance with the laws
              of Victoria, Australia. The competent courts of Victoria will resolve any dispute
              relating to this website.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              We reserve the right to take legal action against you for breach of these Terms and
              Conditions in your country of residence or any other appropriate country or
              jurisdiction.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
