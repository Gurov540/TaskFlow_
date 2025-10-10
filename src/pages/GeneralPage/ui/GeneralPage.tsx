import "./GeneralPage.css";
import { Button } from "../../../shared/ui/Button";
import { Icon } from "../../../shared/ui/Icon";

export const GeneralPage = () => {
  return (
    <>
      <main className="main">
        <section className="hero-section">
          <h1 className="hero-heading">
            Organize Your Work Easily with <span>TaskFlow</span>
          </h1>
          <h6 className="hero-description">
            TaskFlow helps you manage projects and tasks efficiently with
            customizable boards, stages, and priority-based organization. Never
            miss a deadline again!
          </h6>
          <div className="hero-buttons">
            <Button color="primary" size="large">
              Get Started - Sign Up Now
            </Button>
            <Button color="success" size="large">
              View Demo
            </Button>
          </div>
        </section>
        <section className="features-section">
          <h2 className="features-heading">Features</h2>
          <h4 className="features-description">A better way to manage tasks</h4>
          <div className="features">
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-columns">
                  <Icon name="columns"></Icon>
                </i>
              </div>
              <div className="features-container">
                <h3 className="features-card-heading">Customizable Boards</h3>
                <p className="features-card-description">
                  Create boards tailored to your workflow with unlimited
                  customizable columns.
                </p>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-tasks">
                  <Icon name="pen"></Icon>
                </i>
              </div>
              <div className="features-container">
                <h3 className="features-card-heading">Task Management</h3>
                <p className="features-card-description">
                  Add details like priority, due dates, and descriptions to keep
                  everything organized.
                </p>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-chart-line">
                  <Icon name="pen"></Icon>
                </i>
              </div>
              <div className="features-container">
                <h3 className="features-card-heading">Dashboard Analytics</h3>
                <p className="features-card-description">
                  Track your productivity with completion rates, task
                  distribution, and upcoming deadlines.
                </p>
              </div>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-bell">
                  <Icon name="pen"></Icon>
                </i>
              </div>
              <div className="features-container">
                <h3 className="features-card-heading">Real-time Updates</h3>
                <p className="features-card-description">
                  Get instant notifications when tasks are updated or moved
                  between columns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
