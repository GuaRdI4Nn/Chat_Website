from flask import Flask, render_template, flash, request, redirect, url_for
from datetime import datetime 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash 
from datetime import date
from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, validators
from wtforms import BooleanField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length
from wtforms import ValidationError
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_ckeditor import CKEditor
from werkzeug.utils import secure_filename
import uuid as uuid
import os



app = Flask(__name__)



app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///User.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config["SECRET_KEY"]="1234"



db=SQLAlchemy(app)
app.app_context().push()
migrate = Migrate(app, db)



# Flask_Login Stuff
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'



# Create Login Form
class LoginForm(FlaskForm):
	username = StringField("username", validators=[DataRequired()])
	password = PasswordField("password", validators=[DataRequired()])
	submit = SubmitField("submit")
     


@login_manager.user_loader
def user_loader(username):
    return User.query.get(username)



class User(db.Model,UserMixin):
    username=db.Column(db.String(100), primary_key=True)
    password=db.Column(db.String(100),nullable=False)
    def __repr__(self) -> str:
        return list('f{self.user_name}-f{self.password}')
    def get_id(self):
           return (self.username)

    @property
    def verify_password(self, password):
         if self.password==password:
              return True
         else:
              return False
	  
   

   
@app.route('/')
@login_required
def main():
    
    return render_template('main.html')
    # return 'Hello, World!'


@app.route('/alumni')
@login_required
def alumni():
    return render_template('alumni.html')


@app.route('/hackathon')
@login_required
def hackathon():
    return render_template('hackathons.html')



@app.route('/login',methods=['GET','POST'])
def login():
    form = LoginForm(request.form)
    if request.method=="POST":
        username=request.form['username']
        password=request.form['password']
        user1 = User.query.filter_by(username=username).first()
        if user1: 
            if user1.password == password:
                login_user(user1)
                flash("You logged in successfully")
                return redirect(url_for("main"))
            else:
                 flash("Incorrect password")
                 return redirect(url_for('login'))
        else:
            flash("That User Doesn't Exist! Try Again...")
            return redirect(url_for('login'))

    return render_template('login_page.html')


            
@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method=='POST':
       
        
            username=request.form['username']
            password=request.form['password']
            user1 = User.query.filter_by(username=username).first()
            if user1: 
                 flash("Username already registered")
                 return redirect(url_for('register'))
            user1=User(username=username, password=password)
            
            db.session.add(user1)
            db.session.commit()
            flash("User added succesfully")
            return redirect(url_for('login'))
       
 
           
    return render_template('register.html') 



@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully')
    return redirect(url_for('login'))



if __name__=='__main__':
    app.run(debug=True)