import React from "react";
import "./more-reason.css";

function MoreReason({ reasons }) {
  const items =
    reasons && reasons.length
      ? reasons
      : [
          {
            id: 1,
            title: "Enjoy on your TV",
            text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu‑ray players, and more.",
          },
          {
            id: 2,
            title: "Download your shows to watch offline",
            text: "Save your favorites easily and always have something to watch.",
          },
          {
            id: 3,
            title: "Watch everywhere",
            text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
          },
          {
            id: 4,
            title: "Create profiles for kids",
            text: "Send kids on adventures with their favorite characters in a space made just for them.",
          },
        ];

  return (
    <section className="more-reason">
      <div className="more-reason__container">
        <aside className="more-reason__side">
          <h2 className="more-reason__title">More Reasons to Join</h2>
        </aside>

        <div className="more-reason__content">
          <div className="more-reason__grid">
            {items.map((item) => (
              <article key={item.id} className="more-reason__card">
                <div className="more-reason__card-body">
                  <h3 className="more-reason__card-title">{item.title}</h3>
                  <p className="more-reason__card-text">{item.text}</p>
                </div>
                {/* optional small icon / footer could go here */}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreReason;
