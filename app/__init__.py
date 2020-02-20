from flask import Flask

app = Flask(__name__)
app.secret_key = 'dksljfkldslhf37647823647862kjsdhfh'

from app import routes