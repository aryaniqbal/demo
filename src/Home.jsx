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
    <div className="container my-5 text-primary">

      {/* Hero Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h1 className="fw-bold text-primary text-white bg-dark">
              92 PAK
               Game Download APK (Earning App in Pakistan) 2025
            </h1>
            <p>
              92 PAK is a trending earning app in Pakistan that allows users
              to play games and earn rewards instantly.
            </p>
            <a href="#" className="btn btn-primary btn-lg my-3">
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

      {/* Features Section */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Unique Features of 92 PAK</h3>
        <ul className="bg-primary text-white bg-dark">
          <li>Easy to Use Design</li>
          <li>Free Rewards for New Members</li>
          <li>Daily Rewards for Login</li>
          <li>Exclusive Rewards for Loyal Players</li>
          <li>Wide Range of Games</li>
          <li>Safe and Secure Payments</li>
          <li>Quick Registration Process</li>
          <li>24/7 Customer Support</li>
          <li>Regular Game Updates</li>
          <li>Extra Rewards for Achievements</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">What is the 92 Pak Game?</h3>
        <p className="bg-primary text-white bg-dark">
          92 PAK offers a variety of fun and exciting games such as Ludo,
          Teen Patti, Poker, Rummy, Dragon vs Tiger, and more.
        </p>
      </section>
      {/* Games Section */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Exciting Games inside 92 Paisa</h3>
        <p className="bg-primary text-white bg-dark">
          92 PAK Game is a mobile app where you play games and win real money. Think of games like colour prediction, card challenges, or spinning lucky wheels. Every time you play well, you earn coins that can be turned into cash. The app is designed for everyone, especially people in Pakistan. You don’t need to be an expert just download it, pick a game, and start playing!

One big reason people trust this app is its focus on being genuine and safe. It uses secure methods for all money transactions. For example, when you add money (deposit) or take out your winnings (withdraw), it works with JazzCash and EasyPaisa. These are services many Pakistanis already use daily. Also, the app explains all the rules clearly, so you always know how to play and win fairly 47.

Moreover, the app keeps things exciting with daily rewards. Log in every day, and you might get free coins or spins! There’s also a special bonus for inviting friends. Share your referral code, and when they join, you both earn extra. This makes the app not just about playing alone but also about sharing the fun. With so many ways to win, it’s no wonder this app is becoming a favourite across the country
        </p>
      </section>

      {/* Screenshots */}
      <section className="mb-5 text-center">
        <h3 className="bg-primary text-white p-2">Screenshots</h3>
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

      {/* Registration Process */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Simple Registration and Login Process</h3>
        <table className="table table-bordered text-center text-white">
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

      {/* Deposit and Withdraw */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Deposit and Cash Withdraw</h3>
        <table className="table table-bordered text-center text-white">
          <thead>
            <tr>
              <th>Method</th>
              <th>Min Amount</th>
              <th>Max Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JazzCash</td>
              <td>100 PKR</td>
              <td>50,000 PKR</td>
            </tr>
            <tr>
              <td>EasyPaisa</td>
              <td>100 PKR</td>
              <td>50,000 PKR</td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>500 PKR</td>
              <td>100,000 PKR</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Why 92 PAK is More Popular in Pakistan Than Other Platforms</h3>
        <p className="bg-primary text-white bg-dark">
         92 PAK has become more popular in Pakistan because it understands what local players need. It supports trusted payment options like JazzCash and EasyPaisa, making deposits and withdrawals fast and safe. The platform also offers free rewards, daily bonuses, and a wide range of exciting games. With simple registration, 24/7 support, and regular updates, it gives a better and smoother experience than many other gaming platforms in the country.
        </p>
      </section>

      {/* Pros and Cons */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">Pros and Cons of 92 PAK</h3>
        <table className="table table-bordered text-center text-white">
          <thead>
            <tr>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easy to use and fast registration</td>
              <td>Not available on Play Store</td>
            </tr>
            <tr>
              <td>Free rewards for new members</td>
              <td>May require APK updates manually</td>
            </tr>
            <tr>
              <td>Safe & Secure withdrawals</td>
              <td>Dependent on internet connection</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQs */}
      <section className="mb-5">
        <h3 className="bg-primary text-white p-2">FAQs</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button collapsed text-white bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                Is 92 PAK free to use?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-white bg-dark">
                Yes, downloading and registering on 92 PAK is completely free.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed text-white bg-dark"
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
              <div className="accordion-body text-white bg-dark">
                You can withdraw your money via JazzCash, EasyPaisa or Bank transfer.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed text-white bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                Is 92 PAK safe?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-white bg-dark">
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
