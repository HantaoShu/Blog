from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
import re

# Create your views here.
def index(request):
    blog_list = BlogsPost.objects.all()
    for item in blog_list:
        item.maintain = item.maintain[0:200]+'...'
    return render_to_response('index.html',{'blog_list':blog_list})
    
def spec(request):
    blog_list = BlogsPost.objects.all()
    for item in blog_list:
        item.maintain = item.maintain[0:200]+'...'
    path = request.path
    bid = str(re.search(r'/\d+',path).group(0))[1:]
    spec_blog = BlogsPost.objects.all()[1]
    return render_to_response('spec.html',{'spec':spec_blog,'blog_list':blog_list,'path':path,"bid":bid})