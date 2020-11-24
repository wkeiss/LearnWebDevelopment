from django.shortcuts import render

# Create your views here.
from .models import Post

def index(request):
	posts = Post.objects.all() 
	return render(request, 'posts/index.html', {'posts': posts})