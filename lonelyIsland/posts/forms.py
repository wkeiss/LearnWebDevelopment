from .models import Post
from django import forms

class PostForm(forms.ModelForm):
	auto_id=False
	class Meta:
		model = Post
		fields = ['body']
		
		