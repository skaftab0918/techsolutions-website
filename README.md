# TechSolutions Website

A professional and responsive multi-page website .

## 🚀 Features
- **Frontend**: HTML, CSS, SCSS, JavaScript  
- **Dynamic Content**: Rendered from JSON objects  
- **Backend**: PHP ( integration for contact form)  
- **Database**: MySQL (stores contact form submissions)  

## 📂 Pages
- **Home** – Overview with stats and features  
- **About** – Team details and company info  
- **Services** – List of offered services  
- **Contact** – Contact form with validation and database storage  

## 🛠️ Setup Instructions
1. Install [XAMPP](https://www.apachefriends.org/) or any PHP server.  
2. Place this project inside the `htdocs` folder, e.g. `C:\xampp\htdocs\techsolutions`.  
3. Create a MySQL database:

   ```sql
   CREATE DATABASE techsolutions;
   USE techsolutions;
   CREATE TABLE contact_messages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(150) NOT NULL,
       subject VARCHAR(150) NOT NULL,
       message TEXT NOT NULL,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
4. Update php/config.php with your database credentials.

5. Start Apache and MySQL in XAMPP.

6. Open the project in your browser:

   ```sql
   http://localhost/techsolutions/

## 📧 Contact Form

- Performs frontend validation using JavaScript.
- Sends data to php/contact.php.
- Stores submissions into the MySQL database.
