from django.db import models

# Create your models here.
class Post(models.Model):
	body = models.TextField()
	pub_date = models.DateTimeField('date published')
	def __str__(self):
		return self.body