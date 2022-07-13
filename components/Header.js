import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.p}>
        Welcome to my BIG BREAK for Pets Breakfast!
        <br></br>
        I hope your bellys are full of cake and coffee.
        <br></br>
        <br></br>
        I have created a quiz for you, to test your animal trivia! 
        <br></br>
        There's a few questions where you can get a few extra brownie points 😉
      </p>
    </>
  );
}
