import React from "react";
import { Link } from "react-router-dom";

const DashboardHero = ({
  title,
  subtitle,
  actions = [],
  images = [],
  tipText,
}) => {
  return (
    <div className="page">
      <div className="dashboard-hero-v3">
        <div className="dashboard-main-card">
          <div className="dashboard-intro">
            <div className="dashboard-intro-text">
              <h2 className="dash-title">{title}</h2>
              <p className="dash-subtitle">{subtitle}</p>
            </div>
          </div>

          <div className="dashboard-actions-grid">
            {actions.map((a) => {
              if (a.disabled) {
                return (
                  <div key={a.title} className="dashboard-action-card dashboard-action-card-disabled">
                    <div className="dashboard-action-top">
                      <div className="dashboard-action-title">{a.title}</div>
                    </div>
                    <div className="dashboard-action-desc">{a.description}</div>
                  </div>
                );
              }

              return (
                <Link key={a.title} to={a.to} className="dashboard-action-card">
                  <div className="dashboard-action-top">
                    <div className="dashboard-action-title">{a.title}</div>
                    <span className="dashboard-action-arrow">→</span>
                  </div>
                  <div className="dashboard-action-desc">{a.description}</div>
                </Link>
              );
            })}
          </div>

          {tipText && (
            <div className="dashboard-tip-banner">
              <span className="dashboard-tip-label">Tip</span>
              <span>{tipText}</span>
            </div>
          )}

          {images?.length > 0 && (
            <div className="dashboard-promo-grid dashboard-promo-grid-wide">
              {images.map((img) => (
                <div key={img.src} className="dashboard-promo-card dashboard-promo-card-wide">
                  <img
                    className="dashboard-promo-image dashboard-promo-image-wide"
                    src={img.src}
                    alt={img.alt || "image"}
                  />
                  <div className="dashboard-promo-overlay">
                    {img.badge && (
                      <div className="dashboard-promo-badge">{img.badge}</div>
                    )}
                    {img.caption && (
                      <div className="dashboard-promo-caption">{img.caption}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;