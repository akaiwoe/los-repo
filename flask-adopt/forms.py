from flask_wtf import FlaskForm 
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Optional, URL, DataRequired, NumberRange, Length

class AddPetForm(FlaskForm):

    name = StringField("Pet name")

    species = SelectField("Species",
                          choices=[("dog", "Dog"), ('cat', 'Cat'), ('snake', 'Snake')])

    pfp = StringField("Photo URL", validators=[DataRequired(), URL(message='Invalid URL'), Optional()])

    age = IntegerField("Age")

    notes = StringField("Notes")

class EditPetForm(FlaskForm):
    """Form for editing an existing pet."""

    pfp = StringField(
        "Photo URL",
        validators=[Optional(), URL()],
    )

    notes = TextAreaField(
        "Comments",
        validators=[Optional(), Length(min=5)],
    )

    available = BooleanField("Available?", validators=[DataRequired()], )