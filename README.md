<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WeCare - Healthcare Website</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      background:#f4f9ff;
      color:#333;
    }

    header{
      background:#0d6efd;
      color:white;
      padding:20px 50px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    header h1{
      font-size:32px;
    }

    nav a{
      color:white;
      text-decoration:none;
      margin-left:20px;
      font-size:18px;
    }

    .hero{
      height:90vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      background:linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
      url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200') center/cover;
      color:white;
    }

    .hero h2{
      font-size:55px;
      margin-bottom:20px;
    }

    .hero p{
      font-size:22px;
      margin-bottom:30px;
    }

    .btn{
      padding:15px 30px;
      background:#0d6efd;
      border:none;
      color:white;
      font-size:18px;
      border-radius:8px;
      cursor:pointer;
      transition:0.3s;
    }

    .btn:hover{
      background:#084298;
    }

    .services{
      padding:80px 50px;
      text-align:center;
    }

    .services h2{
      font-size:40px;
      margin-bottom:50px;
      color:#0d6efd;
    }

    .service-box{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
      gap:25px;
    }

    .card{
      background:white;
      padding:30px;
      border-radius:15px;
      box-shadow:0 5px 15px rgba(0,0,0,0.1);
      transition:0.3s;
    }

    .card:hover{
      transform:translateY(-10px);
    }

    .card h3{
      margin-bottom:15px;
      color:#0d6efd;
    }

    .about{
      padding:80px 50px;
      background:white;
      text-align:center;
    }

    .about h2{
      font-size:40px;
      margin-bottom:20px;
      color:#0d6efd;
    }

    .contact{
      padding:80px 50px;
      text-align:center;
    }

    .contact h2{
      font-size:40px;
      margin-bottom:30px;
      color:#0d6efd;
    }

    form{
      max-width:500px;
      margin:auto;
    }

    input, textarea{
      width:100%;
      padding:15px;
      margin:10px 0;
      border:1px solid #ccc;
      border-radius:8px;
    }

    footer{
      background:#0d6efd;
      color:white;
      text-align:center;
      padding:20px;
      margin-top:50px;
    }

    @media(max-width:768px){
      .hero h2{
        font-size:38px;
      }

      .hero p{
        font-size:18px;
      }

      header{
        flex-direction:column;
      }

      nav{
        margin-top:15px;
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>WeCare</h1>

    <nav>
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Your Health, Our Priority</h2>
    <p>Providing trusted healthcare services for your family.</p>

    <button class="btn" onclick="showMessage()">
      Book Appointment
    </button>
  </section>

  <section class="services" id="services">
    <h2>Our Services</h2>

    <div class="service-box">

      <div class="card">
        <h3>General Checkup</h3>
        <p>Regular health checkups for better living.</p>
      </div>

      <div class="card">
        <h3>Emergency Care</h3>
        <p>24/7 emergency support and ambulance service.</p>
      </div>

      <div class="card">
        <h3>Online Consultation</h3>
        <p>Consult experienced doctors from your home.</p>
      </div>

      <div class="card">
        <h3>Medicine Delivery</h3>
        <p>Get medicines delivered at your doorstep.</p>
      </div>

    </div>
  </section>

  <section class="about" id="about">
    <h2>About WeCare</h2>

    <p>
      WeCare is a healthcare platform focused on providing
      affordable and quality medical services to everyone.
    </p>
  </section>

  <section class="contact" id="contact">
    <h2>Contact Us</h2>

    <form>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea rows="5" placeholder="Your Message"></textarea>

      <button class="btn">Send Message</button>
    </form>
  </section>

  <footer>
    <p>© 2026 WeCare Healthcare. All Rights Reserved.</p>
  </footer>

  <script>
    function showMessage(){
      alert("Appointment booking feature coming soon!");
    }
  </script>

</body>
</html>
