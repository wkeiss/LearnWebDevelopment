from django.shortcuts import render
from django.http import HttpResponseRedirect

# Create your views here.
from .models import Post
from .forms import PostForm

def index(request):
	posts = Post.objects.order_by('-pub_date')
	if request.method == 'POST':
		post_form = PostForm(data=request.POST)
		if post_form.is_valid():
			new_post = post_form.save()	
	else:
	    	post_form = PostForm()
	return render(request, 'posts/index.html', {'posts': posts, 'post_form': post_form})

def post(request):
	posts = Post.objects.order_by('-pub_date')
	if request.method == 'POST':
		post_form = PostForm(data=request.POST)
		if post_form.is_valid():
			new_post = post_form.save()	
	else:
	    	post_form = PostForm()
	return render(request, 'posts/index.html', {'posts': posts, 'post_form': post_form})

	    
	                                  

