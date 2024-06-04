
import './App.css';
import img1 from './images/img-1.jpg'

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Our Gallery</li>
          <li>Student Corner</li>
        </ul>
      </nav>

      <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos et minus magnam dolorum delectus itaque assumenda deleniti quis! Quis at voluptas soluta ducimus, ipsam quae fuga. Atque, beatae necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos et minus magnam dolorum delectus itaque assumenda deleniti quis! Quis at voluptas soluta ducimus, ipsam quae fuga. Atque, beatae necessitatibus.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&s" className="image-1" alt=""  />
      <br></br>
      <img src={img1} alt="" className="image-2" />
    </header>
      </>
  );
}

export default App;
