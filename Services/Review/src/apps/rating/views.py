from django.shortcuts import render

from rest_framework.decorators import api_view
from django.http import JsonResponse
import json
from django.conf import settings
from .models import Review
from .serializer import ReviewSerializer
from rest_framework.response import Response
from .rabbitmq import Rabbitmq

rabbitmq=Rabbitmq()

@api_view(['POST'])
def save_review(request):
    data=request.data
    print(data)
    user_id=data['user_id']
    recipe_id=data['recipe_id']
    review=data['review']
    #created_at=review['created_at']

    serializer=ReviewSerializer(data=data)

    if not serializer.is_valid():
        return Response({'status':'error', 'message':serializer.error_messages})
    
    else:
        review=Review.objects.create(user_id=user_id, recipe_id=recipe_id, review=review)
        review.save()

        quee_body={'RecipeId': recipe_id, 'Review':data['review']}
        rabbitmq.publish(quee_body)

        return Response({'status':'success', 'message':'Review succesfully added'})

@api_view(['PUT'])
def update_review(request):
    data=request.data
    user_id=data['user_id']
    recipe_id=data['recipe_id']
    review=data['review']

    serializer=ReviewSerializer(data=data)

    if not serializer.is_valid():
        return Response({'status':'error', 'message':serializer.error_messages})
    
    else:
        old_review=Review.objects.filter(user_id=user_id, recipe_id=recipe_id).first()
        old_review.review=review
        old_review.save()

        return Response({'status':'success', 'message':'Review succesfully changed'})

@api_view(['GET'])
def get_byuser(request, userId):
    result=Review.objects.filter(user_id=userId).all()
    serializer=ReviewSerializer(result, many=True)
    
    return Response({'status':'success', 'data':serializer.data})

@api_view(['GET'])
def get_byrecipe(request, recipeId):
    result=Review.objects.filter(recipe_id=recipeId).all()
    serializer=ReviewSerializer(result, many=True)
    
    return Response({'status':'success', 'data':serializer.data})

@api_view(['GET'])
def get_review(request, user_id, recipe_id):
    result=Review.objects.filter(recipe_id=recipe_id, user_id=user_id).first()
    serializer=ReviewSerializer(result)
    
    return Response({'status':'success', 'data':serializer.data})

@api_view(['DELETE'])
def remove_review(request, reviewId):
    entry = Entry.objects.get(id=2)
    entry.delete()
    return Response({'status':'success', 'message':'Review succesfully deleted'})


@api_view(["GET"])
def get_all(request):
    queryset=Review.objects.all()
    serializer=ReviewSerializer(queryset, many=True)

    return Response({'status':'success', 'data':serializer.data})