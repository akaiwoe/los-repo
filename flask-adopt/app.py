from flask import Flask, render_template, request, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///adopt"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = 'ihaveasecret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

app.app_context().push()
connect_db(app)


@app.route('/', methods = ["GET", 'POST'] )
def pet_homepage():
    """ List all pets """
    pets = Pet.query.all()

    return render_template('index.html', pets = pets)

@app.route('/add', methods = ["GET", 'POST'])
def add_pet():
    """ Show add pet form & submit form"""

    form = AddPetForm()

    if form.validate_on_submit():

        name = form.name.data
        species = form.species.data
        photo_url = form.pfp.data or None
        age = form.age.data 
        notes = form.notes.data 

        new_pet = Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes)

        db.session.add(new_pet)
        db.session.commit()

        flash(f"Added {name}, a {species} who is {age} years old")
        return redirect("/") 
    else:
        return render_template('add.html', form = form)
    
@app.route('/pet/<int:pet_id>')
def show_pet(pet_id):
    
    pet = Pet.query.get_or_404(pet_id)
    return render_template('pet/display.html', pet=pet)

@app.route('/pet/<int:pet_id>/edit', methods = ["GET", 'POST'])
def edit_pet(pet_id):
    """ Edit pet form & submit form"""

    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=Pet)

    if form.validate_on_submit():
        pet.notes = form.notes.data
        pet.available = form.available.data
        pet.photo_url = form.pfp.data
        db.session.commit()
        flash(f"{pet.name} updated.")
        return redirect("/")

    else:
        return render_template("/pet/edit.html", form=form, pet=pet)
