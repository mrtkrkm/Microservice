from django.urls import path
from . import views

urlpatterns = [

    path('add', views.save_review),
    path('update', views.update_review),
    path('getbyuser/<int:userId>/', views.get_byuser),
    path('getbyrecipe/<str:recipeId>/', views.get_byrecipe),
    path('delete/<int:reviewId>/', views.remove_review),
    path('get_all', views.get_all),
    path('get_review/<int:user_id>/<int:recipe_id>/', views.get_review)
]