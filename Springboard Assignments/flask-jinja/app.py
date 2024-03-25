from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)

app.debug = True
app.config['SECRET_KEY'] = 'los.lostfiles'
debug = DebugToolbarExtension(app)

@app.route('/home')
def home_page():
    prompts = story.prompts
    return render_template("home.html", prompts=prompts)

@app.route('/story')
def show_story():
    text = story.generate(request.args)
    return render_template("story.html", text=text)
