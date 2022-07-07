import {Link} from 'react';
function App() {
  return (

    <div id="container">
      <header id="site-header">
        <nav className="navbar">

          <section className="navbar-dashboard">
            <div className="first-bar">
              <Link href="#">Dashboard</Link>
              <Link className="button" href="#">My Pets</Link>
              <Link className="button" href="#">Add Pet</Link>
            </div>
            <div className="second-bar">
              <ul>
                <li>Welcome, {}!</li>
                <li><Link href="#"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
              </ul>
            </div>
          </section>
          <section className="navbar-anonymous">
            <ul>
              <li><Link href="#"><i className="fas fa-user-plus"></i> Register</Link></li>
              <li><Link href="#"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
            </ul>
          </section>
        </nav>
      </header>
      <main id="site-content">
        <section className="basic">
          <h1> Welcome to pet my pet!</h1>
        </section>
        <section className="login">
          <form action="#" method="post">
            <fieldset>
              <legend>Login</legend>
              <p className="field">
                <label htmlFor="username">Username</label>
                <span className="input">
                  <input type="text" name="username" id="username" placeholder="Username" />
                  <span className="actions"></span>
                  <i className="fas fa-user"></i>
                </span>
              </p>
              <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                  <input type="password" name="password" id="password" placeholder="Password" />
                  <span className="actions"></span>
                  <i className="fas fa-key"></i>
                </span>
              </p>
              <input className="button submit" type="submit" value="Login" />
            </fieldset>
          </form>
        </section>
        <section className="register">
          <form action="#" method="post">
            <fieldset>
              <legend>Register</legend>
              <p className="field">
                <label htmlFor="username">Username</label>
                <span className="input">
                  <input type="text" name="username" id="username" placeholder="Username" />
                  <span className="actions"></span>
                  <i className="fas fa-user"></i>
                </span>
              </p>
              <p className="field">
                <label htmlFor="password">Password</label>
                <span className="input">
                  <input type="password" name="password" id="password" placeholder="Password" />
                  <span className="actions"></span>
                  <i className="fas fa-key"></i>
                </span>
              </p>
              <input className="button submit" type="submit" value="Register" />
            </fieldset>
          </form>
        </section>
        <section className="create">
          <form action="#" method="post">
            <fieldset>
              <legend>Add new Pet</legend>
              <p className="field">
                <label htmlFor="name">Name</label>
                <span className="input">
                  <input type="text" name="name" id="name" placeholder="Name" />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="description">Description</label>
                <span className="input">
                  <textarea rows="4" cols="45" type="text" name="description" id="description"
                    placeholder="Description"></textarea>
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="image">Image</label>
                <span className="input">
                  <input type="text" name="imageURL" id="image" placeholder="Image" />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="category">Category</label>
                <span className="input">
                  <select type="text" name="category">
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Parrot</option>
                    <option>Reptile</option>
                    <option>Other</option>
                  </select>
                  <span className="actions"></span>
                </span>
              </p>
              <input className="button submit" type="submit"  value="Add Pet" />
            </fieldset>
          </form>
        </section>
        <section className="myPet">
          <h3>Name: Pesho</h3>
          <p>Category: Cat</p>
          <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
          <p className="description">This is my cat Pesho</p>
          <div className="pet-info">
            <Link href="#"><button className="button">Edit</button></Link>
            <Link href="#"><button className="button">Delete</button></Link>
            <i className="fas fa-heart"></i> <span>5</span>
          </div>
        </section>
        <section className="otherPet">
          <h3>Name: Gosho</h3>
          <p>Category: Cat</p>
          <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt=""/></p>
          <p className="description">This is not my cat Gosho</p>
          <div className="pet-info">
            <Link href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
            <Link href="#"><button className="button">Details</button></Link>
            <i className="fas fa-heart"></i> <span> 2</span>
          </div>
        </section>
        <section className="deletePet">
          <h3>Pesho</h3>
          <p>Pet counter: <i className="fas fa-heart"></i> 5</p>
          <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
          <form action="#" method="POST">
            <p className="description">This is my cat Pesho</p>
            <button className="button">Delete</button>
          </form>
        </section>
        <section className="detailsMyPet">
          <h3>Koko</h3>
          <p>Pet counter: <i className="fas fa-heart"></i> 6</p>
          <p className="img"><img src="https://www.freepngimg.com/thumb/parrot/2-parrot-png-images-download-thumb.png" alt=""/></p>
          <form action="#" method="POST">
            <textarea type="text" name="description">This is my parrot Koko</textarea>
            <button className="button"> Save</button>
          </form>
        </section>
        <section className="detailsOtherPet">
          <h3>Spirit</h3>
          <p>Pet counter: 7 <Link href="#"><button className="button"><i className="fas fa-heart"></i>
            Pet</button></Link>
          </p>
          <p className="img"><img src="http://pngimg.com/uploads/horse/horse_PNG321.png" alt=""/></p>
          <p className="description">This is my horse Spirit</p>
        </section>
        <section className="dashboard">
          <h1>Dashboard</h1>
          <nav className="navbar">
            <ul>
              <li><Link href="#">All</Link></li>
              <li><Link href="#">Cats</Link></li>
              <li><Link href="#">Dogs</Link></li>
              <li><Link href="#">Parrots</Link></li>
              <li><Link href="#">Reptiles</Link></li>
              <li><Link href="#">Other</Link></li>
            </ul>
          </nav>
          <ul className="other-pets-list">
            <li className="otherPet">
              <h3>Name: Gosho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt=""/></p>
              <p className="description">This is not my cat Gosho</p>
              <div className="pet-info">
                <Link href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
                <Link href="#"><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> 2</span>
              </div>
            </li>
            <li className="otherPet">
              <h3>Name: Gosho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt=""/></p>
              <p className="description">This is not my cat Gosho</p>
              <div className="pet-info">
                <Link href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
                <Link href="#"><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> 2</span>
              </div>

            </li>
            <li className="otherPet">
              <h3>Name: Kiro</h3>
              <p>Category: Dog</p>
              <p className="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" alt=""/></p>
              <p className="description">This is my dog Kiro</p>
              <div className="pet-info">
                <Link href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
                <Link href="#"><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> 4</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="my-pets">
          <h1>My Pets</h1>
          <ul className="my-pets-list">
            <section className="myPet">
              <h3>Name: Pesho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
              <p className="description">This is my cat Pesho</p>
              <div className="pet-info">
                <Link href="#"><button className="button">Details</button></Link>
                <Link href="#"><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
              </div>
            </section>
            <section className="myPet">
              <h3>Name: Pesho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
              <p className="description">This is my cat Pesho</p>
              <div className="pet-info">
                <Link href="#"><button className="button">Details</button></Link>
                <Link href="#"><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
              </div>
            </section>
            <section className="myPet">
              <h3>Name: Pesho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
              <p className="description">This is my cat Pesho</p>
              <div className="pet-info">
                <Link href="#"><button className="button">Details</button></Link>
                <Link href="#"><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
              </div>
            </section>
          </ul>
        </section>
      </main>
      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
