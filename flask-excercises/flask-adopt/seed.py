from models import Pet, db, connect_db
from app import app

default_pfp = 'https://www.wboy.com/wp-content/uploads/sites/43/2018/01/generic20dog_1516897806660.jpg_32642943_ver1.0.jpg?w=640'

db.drop_all()
db.create_all()

pet_1 = Pet(name = "Rocky",
            species = "dog",
            age =  12,
            photo_url = 'https://petkeen.com/wp-content/uploads/2023/05/Adorable-Young-White-Teacup-Maltese-Chilling-in-the-Loving-House_Plernz_Shutterstock.jpg'
            )

pet_2 = Pet(name = "Bolto",
            species = "dog",
            age = 8,
            photo_url = 'https://www.dogster.com/wp-content/uploads/2024/01/siberian-husky-dog-standing-on-grass_Edalin-Photograhy_Shutterstock.jpeg')

pet_3 = Pet(name = 'Brioh',
            species = 'dog',
            age = 4,
            photo_url = 'https://www.rover.com/blog/wp-content/uploads/2021/06/java.the_.husky_-1024x768.jpg')

pet_4 = Pet(name = "Pheobe",
            species = "cat",
            age = 2,
            photo_url = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg')
pet_5 = Pet(name = "Lolo",
            species = 'snake',
            age = 3,
            photo_url = 'https://www.petbacker.com/blog/images/snake-getting-handled.jpg')

db.session.add(pet_1)
db.session.add(pet_2)
db.session.add(pet_3)
db.session.add(pet_4)
db.session.add(pet_5)

db.session.commit()