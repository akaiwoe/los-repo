"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


default_image = 'https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg'


class Cupcake(db.Model):
        """ Cupcake Model """

        __tablename__ = 'cupcakes'

        id = db.Column(db.Integer,primary_key = True,
                                autoincrement = True)
        
        flavor = db.Column(db.Text, 
                           nullable = False)
        
        size = db.Column(db.Text,
                         nullable = False)
        
        rating = db.Column(db.Float,
                           nullable = False)
        
        image = db.Column(db.Text,
                          nullable=False,
                          default = default_image)
        

        def serialize(self):
         """ Make db.Model turn into JSON """

         return {
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image':self.image
            }

        def __repr__(self):
         """ Fix Respresentation """
      
         return f"<Cupcake {self.id} flavor = {self.flavor} size = {self.size} rating = {self.rating}"