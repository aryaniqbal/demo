import React from "react";
import s1 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.34 AM.jpeg";
import s2 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.35 AM (1).jpeg";
import s3 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.35 AM.jpeg";
import s4 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.36 AM (1).jpeg";
import s5 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.36 AM.jpeg";
import s6 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.37 AM (1).jpeg";
import s7 from "../src/assets/WhatsApp Image 2025-08-20 at 8.55.37 AM.jpeg";
import s8 from "../src/assets/asa.jpeg";

function Home() {
  return (
    <div className="container my-5">

      {/* Hero Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h1 className="text-danger fw-bold">
              92 Paisa Game Download APK (Earning App in Pakistan) 2025
            </h1>
            <p className="text-light">
              92 Paisa is a trending earning app in Pakistan that allows users
              to play games and earn rewards instantly.
            </p>
            <a href="#" className="btn btn-danger btn-lg my-3">
              Download Now
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={s8}
              alt="92 Paisa App"
              className="img-fluid rounded shadow"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-5 text-center">
        <h3 className="bg-danger text-white p-2">Screenshots</h3>
        <div className="row">
          {[s1, s2, s3, s4, s5, s6, s7].map((img, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <img
                src={img}
                className="img-fluid rounded shadow"
                alt={`Screenshot ${i + 1}`}
                style={{ width: "250px", height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sample Table (Registration Info) */}
      <section className="mb-5">
        <h3 className="bg-danger text-white p-2">Sample Registration Process</h3>
        <table className="table table-bordered table-dark text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Step</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Download</td>
              <td>Click on the download button above</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Install</td>
              <td>Install APK in your mobile</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Register</td>
              <td>Fill registration form with details</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Login</td>
              <td>Login with your username & password</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQs */}
      <section className="mb-5">
        <h3 className="bg-danger text-white p-2">FAQs</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                Is 92 Paisa free to use?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, downloading and registering on 92 Paisa is completely free.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                How can I withdraw my money?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can withdraw your money via JazzCash or EasyPaisa.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                Is 92 Paisa safe?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, it is safe and provides secure transactions.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
