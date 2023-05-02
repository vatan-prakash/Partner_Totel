import React, { Component } from "react";
import styles from "./Mainleft.module.css";

export class Mainleft extends Component {
  render() {
    return (
      <div className={styles.menubar}>
        <ul>
          <li>
            <div className={styles.l}>
              <div className={styles.iconimage}>
                <img src="/ImageH/1icon.png" />
              </div>
              <div className={styles.items}>Inbox</div>
            </div>
          </li>

          <li>
            <div className={styles.l}>
              <div className={styles.iconimage}>
                <img src="/ImageH/2icon.png" />
              </div>
              <div className={styles.items}>Listings</div>
            </div>
          </li>

          <li>
            <div className={styles.l}>
              <div className={styles.iconimage}>
                <img src="/ImageH/Icon3.jpg" />
              </div>
              <div className={styles.items}>Booking</div>
            </div>
          </li>

          <li>
            <div className={styles.l}>
              <div className={styles.iconimage}>
                <img src="/ImageH/like.png" />
              </div>
              <div className={styles.items}>Wishlist</div>
            </div>
          </li>

          <li>
            <div className={styles.l}>
              <div className={styles.iconimage}>
                <img src="/ImageH/Icon 5.svg" />
              </div>
              <div className={styles.items}>Settings</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Mainleft;
