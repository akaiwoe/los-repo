from flask_sqlalchemy import SQLAlchemy
from wtforms.validators import InputRequired, Optional

db = SQLAlchemy()

def connect_db(app):
    """Connect to databse"""

    db.app = app
    db.init_app(app)

# MODELS GO HERE

default_pfp = 'https://www.wboy.com/wp-content/uploads/sites/43/2018/01/generic20dog_1516897806660.jpg_32642943_ver1.0.jpg?w=640'

class Pet(db.Model):
    """ Pet """

    __tablename__ = 'pets'

    id = db.Column(db.Integer,
                   primary_key = True,
                   autoincrement = True,)
    
    name = db.Column(db.Text,
                     nullable=False)
    
    species = db.Column(db.Text,
                        nullable = False
                        )
    
    photo_url = db.Column(db.Text,
                          nullable=True)
    
    age = db.Column(db.Integer,
                    nullable=True)
    
    notes = db.Column(db.Text,
                      nullable=True)
    
    available = db.Column(db.Boolean,
                          nullable=False,
                          default=True)
    
    