import random
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/calculate-prize')
def calculate():
    return str(random.randint(1, 6))


app.run(port=3000)
