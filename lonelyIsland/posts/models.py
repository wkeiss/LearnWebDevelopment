from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
	body = models.TextField()
	pub_date = models.DateTimeField(default=timezone.now )
	def __str__(self):
		return self.body