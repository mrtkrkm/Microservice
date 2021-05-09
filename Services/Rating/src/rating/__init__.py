from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_swagger_ui import get_swaggerui_blueprint
from .rabbitmq import Rabbitmq
import time

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///ratings.db"

CORS(app)


db=SQLAlchemy(app)

time.sleep(15)
rabbitmq=Rabbitmq()
from rating import controller


### swagger specific ###
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Rating Service"
    }
)
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
### end swagger specific ###

