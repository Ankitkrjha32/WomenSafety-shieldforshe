import React from "react";
import "../styles/features.css";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";
import lgpic from "../images/lgprofile.png";

const Features = () => {
  return (
    <div>
      <div className="features-wrapper">
        <img src={lgpic} alt="Large Profile" style={{ width: "100%" }} />
      </div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">
                AI- and ML-Powered Platform for Women’s Safety
              </p>
              <h2 className="features_title">
                Our one-stop platform is designed to enhance women’s safety
                through the following features:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://static.vecteezy.com/system/resources/previews/036/259/520/non_2x/ai-generated-wall-mount-cctv-security-camera-isolated-on-transparent-background-free-png.png" alt="Real-Time Crime Detection" width={150} />
                <h3 className="mt-4">Real-Time Crime Detection</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Integration of AI-enabled CCTV systems using computer vision
                  and ML algorithms to analyze live video feeds for detecting
                  suspicious activities like harassment or unauthorized
                  intrusions. Gesture and behavior recognition systems are
                  trained to identify distress signals and report incidents in
                  real time to authorities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cartogram_of_2008-2020_US_presidential_elections.svg/350px-Cartogram_of_2008-2020_US_presidential_elections.svg.png" alt="Emergency Service Support" width={150} />
                <h3 className="mt-4">Safety Zone Classification Using ML:</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Classification of public spaces into Red (unsafe), Yellow (moderately safe), and Green (safe) zones based on historical crime data, real-time feedback, and crowd-sourced inputs.Predictive ML models identify potential hotspots for crimes based on trends and patterns.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://thumbs.dreamstime.com/b/incident-sign-stamp-white-background-vector-illustration-incident-sign-stamp-156239613.jpg" alt="Incident Reporting" width={150} />
                <h3 className="mt-4">Incident Reporting</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  We take your community seriously, and that's why we've
                  implemented incident reporting. Your details are safeguarded
                  with the latest encryption technology to ensure privacy.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRZGWoeTAPPo4i6atni2P2WFMzL0Wemwb6tspshpYgccJwFM8Gy0WaQzGSWukTD1dIRQ&usqp=CAU" alt="Live Location" width={150} />
                <h3 className="mt-4">Street Lighting Optimization</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                IoT-enabled smart lighting systems connected to the platform provide real-time updates on lighting conditions.ML-based prioritization of poorly lit areas for urgent repair based on safety zone classifications and user feedback.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://static.vecteezy.com/system/resources/previews/017/367/752/non_2x/woman-driver-sitting-in-modern-automobile-buy-a-new-car-driving-school-concept-happy-female-motorist-isolated-flat-cartoon-character-illustration-vector.jpg"alt="Emergency Chat" width={150} />
                <h3 className="mt-4">SheRide</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                A transport feature offering bike taxi services for women by women, integrated with safety protocols such as GPS tracking, panic buttons, and automated route alerts to nearby police stations.Personalized safety recommendations using AI for route optimization based on safety zone data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://media.licdn.com/dms/image/D4D12AQEqDr2WmIDKrg/article-cover_image-shrink_600_2000/0/1690389776221?e=2147483647&v=beta&t=ySugcnbIEAOTVmuhHPjdxlBl1ez7uvnwQL520TQGVNU" alt="Mail Services" width={150} />
                <h3 className="mt-4">Comprehensive Crime Reporting and Emergency Assistance:</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                One-tap reporting of crimes integrated with NLP-based chatbots for instant communication in multiple languages.AI-powered predictive analytics to optimize resource allocation for emergency responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
