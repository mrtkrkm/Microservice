from django.db import models
from datetime import datetime

class Review(models.Model):
    class Meta:
        db_table = 'reviews'

    user_id=models.IntegerField(null=False)
    recipe_id=models.TextField(null=False)
    review=models.TextField(null=False)
    created_at=models.DateTimeField(default=datetime.now)

