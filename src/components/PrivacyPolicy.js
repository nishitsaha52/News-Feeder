import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaRegClock, FaChartLine, FaCookieBite, FaGlobe, FaChild, FaUsers } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container my-5">
      <Row>
        <Col>
          <h1 className="privacy-policy-heading">Privacy Policy</h1>
          <p className="intro-text">
            Welcome to News Alley! We are committed to protecting your privacy and ensuring a safe and secure experience. This Privacy Policy explains how we collect, use, and safeguard your personal information. By using our services, you agree to the practices described in this policy.
          </p>
          <h2 className="section-heading">
            <FaGlobe size={24} className="section-icon" /> Information Collection
          </h2>
          <p>
            We collect various types of information to provide and improve our services:
          </p>
          <div className="info-list">
            <div className="info-item">
              <FaUsers size={24} className="info-icon" />
              <div className="info-text">
                <strong>Personal Information:</strong> Such as your name, email address, and contact details collected when you subscribe, contact us, or register on our site.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Usage Data:</strong> Information about how you interact with our site, such as your IP address, browser type, and pages visited.
              </div>
            </div>
            <div className="info-item">
              <FaCookieBite size={24} className="info-icon" />
              <div className="info-text">
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.
              </div>
            </div>
          </div>
          <h2 className="section-heading">
            <FaShieldAlt size={24} className="section-icon" /> Use of Information
          </h2>
          <p>
            We use the collected information to:
          </p>
          <div className="info-list">
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Improve Our Services:</strong> To better tailor our content and features to your preferences.
              </div>
            </div>
            <div className="info-item">
              <FaUsers size={24} className="info-icon" />
              <div className="info-text">
                <strong>Communicate with You:</strong> To send you updates, newsletters, and marketing information that you have opted in to receive.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Analyze Usage:</strong> To understand how our users interact with our site and make data-driven decisions to enhance user experience.
              </div>
            </div>
          </div>
          <h2 className="section-heading">
            <FaShieldAlt size={24} className="section-icon" /> Security
          </h2>
          <p>
            We are dedicated to ensuring the security of your personal information. We implement various measures, including:
          </p>
          <div className="info-list">
            <div className="info-item">
              <FaShieldAlt size={24} className="info-icon" />
              <div className="info-text">
                <strong>Encryption:</strong> We use advanced encryption to protect data transmitted between your device and our servers.
              </div>
            </div>
            <div className="info-item">
              <FaRegClock size={24} className="info-icon" />
              <div className="info-text">
                <strong>Regular Audits:</strong> We conduct regular security audits to identify and address vulnerabilities.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Access Controls:</strong> We restrict access to personal information to authorized personnel only.
              </div>
            </div>
          </div>
          <h2 className="section-heading">
            <FaUsers size={24} className="section-icon" /> User Rights
          </h2>
          <p>
            You have the following rights regarding your personal data:
          </p>
          <div className="info-list">
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Access:</strong> Request a copy of the personal data we hold about you.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Correction:</strong> Update or correct any inaccurate or incomplete data.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Deletion:</strong> Request the deletion of your personal data under certain conditions.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Opt-Out:</strong> Withdraw your consent for us to process your data at any time.
              </div>
            </div>
          </div>
          <h2 className="section-heading">
            <FaCookieBite size={24} className="section-icon" /> Cookies and Tracking Technologies
          </h2>
          <p>
            Our site uses cookies to:
          </p>
          <div className="info-list">
            <div className="info-item">
              <FaCookieBite size={24} className="info-icon" />
              <div className="info-text">
                <strong>Enhance Your Experience:</strong> By remembering your preferences and settings.
              </div>
            </div>
            <div className="info-item">
              <FaChartLine size={24} className="info-icon" />
              <div className="info-text">
                <strong>Analyze Traffic:</strong> To understand and improve how our site is used.
              </div>
            </div>
          </div>
          <p>You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your experience on our site.</p>
          <h2 className="section-heading">
            <FaRegClock size={24} className="section-icon" /> Data Retention
          </h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. We will delete or anonymize your data when it is no longer needed or upon request.
          </p>
          <h2 className="section-heading">
            <FaUsers size={24} className="section-icon" /> Third-Party Services
          </h2>
          <p>
            We may use third-party services for functionality, analytics, or advertising. These services have their own privacy policies. We are not responsible for their practices and encourage you to review their policies.
          </p>
          <h2 className="section-heading">
            <FaChild size={24} className="section-icon" /> Children’s Privacy
          </h2>
          <p>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware of such information, we will take steps to delete it promptly.
          </p>
          <h2 className="section-heading">
            <FaRegClock size={24} className="section-icon" /> Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of the revised policy.
          </p>
          <h2 className="section-heading">
            <FaUsers size={24} className="section-icon" /> Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please reach out to us at <a href="mailto:support@newsalley.com" className="contact-link">support@newsalley.com</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
