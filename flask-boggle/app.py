from boggle import Boggle
from flask import Flask, render_template, request, session, jsonify, json

boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'los.lostfiles'

@app.route('/', methods=['POST','GET'])
def home_page():
    session['board'] = boggle_game.make_board()
    return render_template('index.html', board = 'board')

@app.route('/check-guess', methods=['POST', 'GET'])
def check_guess():
    word = request.get_json(force=True)
    board = session['board']
    response = boggle_game.check_valid_word(board, word)
    print(jsonify({'result':response}))
    return jsonify({'result':response})
