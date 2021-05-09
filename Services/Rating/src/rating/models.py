from datetime import datetime
from sqlalchemy.inspection import inspect
from rating import db


class Serializer(object):

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]

class Rating(db.Model,Serializer):
    id=db.Column(db.Integer, primary_key=True)
    recipe_id=db.Column(db.Text, nullable=False)
    user_id=db.Column(db.Integer, nullable=False)
    rate=db.Column(db.Integer, nullable=False)
    date_posted=db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f"Rating('{id}')"

    def serialize(self):
        d = Serializer.serialize(self)
        return d