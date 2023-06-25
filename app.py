import numpy as np
import pickle

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
#from gecmdvent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

clf = pickle.load(open("global_T.pkl",'rb'))

print('Model loaded. Start serving...')

print('Model loaded. Start serving...')

print('Check http://127.0.0.1:5000/')


@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def predict():
    print("requests called")
    if request.method == 'POST':
        # Get the file from post request
        v1 = request.form['year']
        v2 = request.form['day']
        v3 = request.form['attack']
        v4 = request.form['target']
        v5 = request.form['nation']
        v6 = request.form['weapon']
        #v7 = request.form['nkill']
        v8 = request.form['extended']
        v9 = request.form['country']
        # v10 = request.form['region']
        # v11 = request.form['latitude']
        # v12 = request.form['longitude']
        # v13 = request.form['specificity']
        # v14 = request.form['vicinity']
        # v15 = request.form['crit1']
        v16 = request.form['suicide']
        v17 = request.form['nperps']
        newpat = [[v1,v2,v3,v4,v5,v7,v8,v9,v16,v17]]
        print(type(newpat))
        result = clf.predict(newpat)
        print(result)
        if result == 1:
            val = "Posiibility of attack"
        else:
            val = "No Possibility of attack"
    return render_template('index.html',value=val)

if __name__ == '__main__':
    app.run(debug=True)
