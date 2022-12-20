from flask import Flask, render_template, Response
app=Flask(__name__)
@app.route('/')
def index():
    return ("WebGo")
if __name__=='link':
    app.run(host='0.0.0.0', port='5000', debug=True)
