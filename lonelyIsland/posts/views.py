from django.shortcuts import render

# Create your views here.
from django.template import loader
from .models import Post

def index(request):
	template = loader.get_template('posts/index.html')
	return render(request, 'posts/index.html')