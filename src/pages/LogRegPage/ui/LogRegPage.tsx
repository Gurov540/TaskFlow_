import "./LogReg.css";

export const LogRegPage = () => {
  return (
    <section
      id="loginModal"
      className="modal active"
      aria-hidden="true"
      aria-labelledby="loginTitle"
    >
      <div className="modal-content">
        <span className="close">
          <i className="fas fa-times"></i>
        </span>
        <h2 className="form-title">LogIn</h2>
        <div className="modalTabs">
          <button className="modalTab-button active">Login</button>
          <button className="modalTab-button">Register</button>
        </div>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              aria-required="true"
            />
          </div>

          <div className="form-actions">
            <button>Cancel</button>
            <button id="modal-log-btn" className="modal-btn action-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
