from flask import jsonify
from .models import Serializer, Rating
from rating import rabbitmq
from rating import app
from flask import request
from rating import db

@app.route('/api/get_all', methods=['GET'])
def get_all_rating():
    try:
        rating=Rating.query.all()
        data=Serializer.serialize_list(rating)
        return jsonify({"message":"success", "data":data})
    except:
        return jsonify({'result':'error', 'data':'Error occured'})

@app.route('/api/get_one/<int:user_id>/<int:recipe_id>/', methods=["GET"])
def get_rating(user_id, recipe_id):
    try:
        rating=Rating.query.filter_by(user_id=user_id, recipe_id=recipe_id).first()
        data=rating.serialize()
        return jsonify({"message":"success", "data":data})
    except:
        return jsonify({'result':'error', 'data':'Error occured'})

@app.route('/api/get_by_user/<int:user_id>', methods=["GET"])
def get_ratings(user_id):
    try:
        rating=Rating.query.filter_by(user_id=user_id).first()
        data=rating.serialize()
        return jsonify({"message":"success", "data":data})
    except:
        return jsonify({'result':'error', 'data':'Error occured'})

def check_exist(user_id, recipe_id):
    result=Rating.query.filter_by(user_id=user_id, recipe_id=recipe_id)
    if result.count()>0:
        return True
    return False


@app.route('/api/rating', methods=['POST'])
def add_rating():
    try:
        data=request.get_json()
        recipe_id=data['recipe_id']
        print(recipe_id)
        user_id=data['user_id']
        rate=data['rate']
        
        if(not check_exist(user_id, recipe_id)):
            
            rating=Rating(recipe_id=data['recipe_id'], user_id=data['user_id'], rate=data['rate'])
            
            
            quee_body={"recipeId":recipe_id, "Value":data['rate'],"Count":1}
            print(quee_body)

            rabbitmq.publish(quee_body)
            

            db.session.add(rating)
            db.session.commit()


            return jsonify({'result':'success', 'data':'Rating succesfully added'})
        return jsonify({'result':'Error', 'data':'Rating already exists'})
    
    except:
        return jsonify({'result':'error', 'data':'Error occured'})


@app.route('/api/rating', methods=['PUT'])
def update_rating():
    try:
        data=request.get_json()

        rating=Rating.query.filter_by(user_id=data['user_id'],recipe_id=data['recipe_id']).first()
        
      
        old_count=Rating.query.filter_by(user_id=data['user_id'], recipe_id=data['recipe_id']).first().rate
        rating.rate=data['rate']
        quee_body={"recipeId":recipe_id, 'Value': old_count-data['rate'],'Count':0}
        rabbitmq.publish(quee_body)
        
        db.session.commit()

        

        return jsonify({'result':'success', 'data':'Rating successfully changed'})
    except:
        return jsonify({'result':'error', 'data':'Error occured'})
 